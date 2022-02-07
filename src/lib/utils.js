
export const formatPercent = function(decimal) {
  return Math.round(parseFloat(decimal) * 100);
}

export const calculateProgress = function(resources) {
  let total = resources.length;
  let totalCompleted = 0;


  let totalEssential = 0;
  let completedEssential = 0;

  let totalRecommended = 0;
  let completedRecommended = 0;

  for (let i = 0; i < resources.length; i++) {
    const resource = resources[i];
    let completed = resource?.completed;

    if(resource?.importance === 0) {
      totalEssential += 1;
      completedEssential += completed ? 1 : 0;
    }

    if(resource?.importance === 1) {
      totalRecommended += 1;
      completedRecommended += completed ? 1 : 0;
    }

    if(completed) {
      totalCompleted += 1;
    }
  }

  return {
    completed: totalCompleted,
    total,
    percent : totalCompleted / total,
    essentialProgress : completedEssential / totalEssential,
    recommendedProgress : completedRecommended / totalRecommended,
  };
}

export const formatDuration = function(mins) {
  if(mins < 60) {
    return mins + " mins";
  }

  if(mins < 1440) {
    return Math.floor(mins/60) + " hrs";
  }

  if(mins >= 1400) {
    return Math.floor(mins/60/24) + " days";
  }
}

export function mergeArrayObjects(arr1,arr2){
  return arr1.map((item,i)=>{
     if(item?.name === arr2[i]?.name){
         //merging two objects
       return Object.assign({},item,arr2[i])
     }
  })
}