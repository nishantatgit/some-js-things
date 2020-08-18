var comparators = {
  /* sort the tshirt array first by color then by size */
  'tshirt-array' : function(tshirt1, tshirt2){
                    var result;
                    if(tshirt1.color > tshirt2.color){
                      result = 1;
                    } else if(tshirt1.color < tshirt2.color){
                      result = -1;
                    } else {
                      if(tshirt1.size > tshirt2.size ){
                        result = 1
                      } else if(tshirt1.size < tshirt2.size){
                        result = -1
                      }
                      else {
                        result = 0;
                      }
                    }
                    return result;
                  },
}

export { comparators };