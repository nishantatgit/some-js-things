var arraysToTest = {
  '1' : [
          0, 0, 0, -1, 12, 5000, 3, -90, -12, 45, 6, 89, 64, 0, 1,
          2, 3, 4, 5, 999, -9, 2, 100000, -3, 11
        ], // random number array
  '2' : [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36, 37, 90, 91, 92, 97, 100, 101, 500,
          5001,5002,5003
        ], // sorted number array
  '3' : [ 
          5003, 5002, 5001, 500, 101, 100, 97, 92, 91, 90, 37, 36, 
          35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 
          20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 
          4, 3, 2, 1
        ], // reverse sorted number array
  '4' : [-1],
  '5' : [2,1],
  '6' : [1,-2,3],
  'tshirt-array' : [ 
                      {size:'L', color:'black'}, {size:'S', color:'black' }, {size: 'S', color: 'yellow'},
                      {size:'XS', color:'black' },{size: 'S', color:'purple' },{size: 'XL', color: 'green'},
                      {size:'S', color:'green' },{size: 'L', color:'green' },{size: 'XL', color: 'purple'},
                      {size:'XXL', color:'black' },{size: 'XS', color:'yellow' },{size: 'XXL', color: 'green' }
                    ]
}

export { arraysToTest as testData };