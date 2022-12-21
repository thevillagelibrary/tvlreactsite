import { set } from '@/utils/localStorage';

export default async function fetchGoogleSheets(setLoading) {
  const sheetNames = [
    'Just_Off_Rental',
    'Books',
    'CDs',
    'Youth',
    'Donations',
    'Upcoming_Events',
    'Hours',
  ];
  let requests = [];
  sheetNames.forEach(buildRequests);
  let sheets = [];

  Promise.all(requests)
    .then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then((data) => addDataToSheets(data))
    .finally(() => {
      setLoading(false);
    });

  function addDataToSheets(data) {
    let timeStamp = Date.now();
    let i;
    for (i = 0; i < sheetNames.length; i++) {
      sheets.push(data[i].values);
    }
    set('sheets', sheets);
    set('timeStamp', timeStamp);
    let categories = [];
    sheets.forEach(getCategories);
    categories.forEach(getEntryCount);
    set('categories', categories);

    function getCategories(item, index) {
      let categoryList = [];
      let i;
      for (i = 1; i < item.length; i++) {
        let category = item[i][0];
        if (category !== '') {
          let categoryObject = {
            row: i,
            category: item[i][0],
            entries: 0,
          };

          categoryList.push(categoryObject);
        }
      }
      categories.push(categoryList);
    }

    function getEntryCount(item, index) {
      if (item.length < 2) {
        categories[index][0].entries = sheets[index].length - 2;
      } else {
        let i;
        for (i = 0; i < item.length - 1; i++) {
          categories[index][i].entries =
            categories[index][i + 1].row - categories[index][i].row - 1;
        }
        categories[index][i].entries =
          sheets[index].length - categories[index][i].row - 1;
      }
    }
  }

  function buildRequests(item, index) {
    const sheetId = import.meta.env.VITE_GOOGLE_SHEETS_ID;
    const apiKey = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
    const sheetRequest =
      'https://sheets.googleapis.com/v4/spreadsheets/' +
      sheetId +
      '/values/' +
      item +
      '?key=' +
      apiKey;
    requests = [...requests, fetch(sheetRequest)];
  }
}
