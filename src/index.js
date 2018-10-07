module.exports = function solveSudoku(matrix) {
  
    matrix_col = [[],[],[],[],[],[],[],[],[]]; 
  
    for (var i = 0; i < 9; i++){
      for (var k = 0; k < 9; k++){
          matrix_col[i].push(matrix[k][i]);
      };
    };
  
    matrix_block = [[],[],[],[],[],[],[],[],[]];  
  
    // 0
    for (var k = 0; k < 3; k++){
      for (var j = 0; j < 3; j++){
       matrix_block[0].push(matrix[k][j]);
      };
    };
    // 1 
    for (var k = 0; k < 3; k++){
      for (var j = 3; j < 6; j++){
        matrix_block[1].push(matrix[k][j]);
      };
    };
    // 2
    for (var k = 0; k < 3; k++){
      for (var j = 6; j < 9; j++){
        matrix_block[2].push(matrix[k][j]);
      };
    };
    // 3 
    for (var k = 3; k < 6; k++){
      for (var j = 0; j < 3; j++){
       matrix_block[3].push(matrix[k][j]);
      };
    };
    // 4 
    for (var k = 3; k < 6; k++){
      for (var j = 3; j < 6; j++){
        matrix_block[4].push(matrix[k][j]);
      };
    };
    // 5 
    for (var k = 3; k < 6; k++){
      for (var j = 6; j < 9; j++){
        matrix_block[5].push(matrix[k][j]);
      };
    };
    // 6 
    for (var k = 6; k < 9; k++){
      for (var j = 0; j < 3; j++){
        matrix_block[6].push(matrix[k][j]);
      };
    };
    // 7 
    for (var k = 6; k < 9; k++){
      for (var j = 3; j < 6; j++){
        matrix_block[7].push(matrix[k][j]);
      };
    };
    // 8 
    for (var k = 6; k < 9; k++){
      for (var j = 6; j < 9; j++){
       matrix_block[8].push(matrix[k][j]);
      };
    };
      
    var num = [1,2,3,4,5,6,7,8,9];
    
    for (var i = 0; i < matrix.length; i++){
      for (var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] !== 0) continue;
        
        X: for (var k = 0; k < num.length; k++){
          
          for (var x = 0; x < matrix[i].length; x++){
            if (num[k] === matrix[i][x]) continue X;
          };
         
          for (var z = 0; z < matrix_col[j].length; z++){
            if (num[k] === matrix_col[j][z]) continue X;
          };
                   
          if ((i == 0 || i == 1 || i == 2) && (j == 0 || j == 1 || j == 2)) {
            var q = 0;
          };
         
          if ((i == 0 || i == 1 || i == 2) && (j == 3 || j == 4 || j == 5)) {
            var q = 1;
          };
          
          if ((i == 0 || i == 1 || i == 2) && (j == 6 || j == 7 || j == 8)) {
            var q = 2;
          };
          
          if ((i == 3 || i == 4 || i == 5) && (j == 0 || j == 1 || j == 2)) {
            var q = 3;
          };
          
          if ((i == 3 || i == 4 || i == 5) && (j == 3 || j == 4 || j == 5)) {
            var q = 4;
          };
          
          if ((i == 3 || i == 4 || i == 5) && (j == 6 || j == 7 || j == 8)) {
            var q = 5;
          };
           
          if ((i == 6 || i == 7 || i == 8) && (j == 0 || j == 1 || j == 2)) {
            var q = 6;
          };
          
          if ((i == 6 || i == 7 || i == 8) && (j == 3 || j == 4 || j == 5)) {
            var q = 7;
          };
          
          if ((i == 6 || i == 7 || i == 8) && (j == 6 || j == 7 || j == 8)) {
            var q = 8;
          };
  
          for (var y = 0; y < matrix_block[q].length; y++){
            if (num[k] === matrix_block[q][y]) continue X;
          };
                           
          matrix[i][j] = num[k];
          if (matrix[i][j]) break X;
        };
        
        if (matrix[i][j] === 0) {
          return false;
        };
       
      };
    }; 
    return matrix;
};
