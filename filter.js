/*
Implement the function getTwoWordTitles that takes in an array of movie objects.
This function should use the native filter method return a new array of only the
movie objects whose title is just two words.
*/

function getTwoWordTitles(array){
 
};

/*
Implement the function getShortSpecialFeatures that takes in an array of movie objects.
This function should use the native filter method to return a new array of only the movie
objects that have a special feature that is less than 30 minutes.
*/

function getShortSpecialFeatures(array){
  return array.filter(function(movie){
    return movie.specialFeatures.filter(function(feature){
        return feature.length.match(/\d+/) <= 30;
    }).length > 0;
  });
}


function filter(array, func){
  const output = [];
  for (let i = 0; i < array.length; i++){
    if (func(array[i], i, array)){
      output.push(array[i]);
    }
  }
  return output;
}

function map(array, func){
  var output = [];
  for (let i = 0; i < array.length; i++){
    output.push(func(array[i], i, array));
  }
  
  return output;
}


/*
Implement the function getCommentaries that takes in an array of movie objects. This function
should use the native filter method to return a new array of only the movies that have a special
feature whose type is "Commentary"
*/

function getCommentaries(array){
  
}

/*
Implement the function getEightiesHorror that takes in an array of movie objects. This function
should use the native filter method to return a new array of only the films that were made in
the 1980s and have 'Horror' in their genreTags array.
*/

function getEightiesHorror(array){
  
}