const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

  // Create an array of company names

  const companyNames = companies.map((company) => company.name);
//   console.log(companyNames);

// Create an array with just company and category
const companyNameAndCategory = companies.map((company) => {
    return {
        name:company.name,
        category:company.category,
    };
});

// console.log(companyNameAndCategory);

// Create an array of objects with the name and the length of each company in years

const companyAge = companies.map((company) => {
    return {
        name: company.name,
        age: company.end - company.start,
    };
});

console.log(companyAge);