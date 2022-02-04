import { browser } from '$app/env'; 
import { readable, writable, derived } from 'svelte/store';
import { calculateProgress, mergeArrayObjects } from '$lib/utils';

import RESOURCES from '$lib/resources';
let db = false;

if(browser) {
  let localDb = localStorage.getItem('db');

  if(localDb) {
    db = mergeArrayObjects(RESOURCES, JSON.parse(localDb));
    console.log(db)
  }
}

export const selectedLearningImportance = writable(0);
export const resources = writable(db || RESOURCES);
export const resourcesTotal = readable(RESOURCES.length);

export const completedEssential = writable(false);
export const completedRecommended = writable(false);

export const resourcesCompleted = writable(0);

export const resourcesProgress = derived(resources, $resources => {
  if(browser) {
    localStorage.setItem('db', JSON.stringify($resources))
  }
  let progress = calculateProgress($resources)
  console.log(progress)
  resourcesCompleted.set(progress.completed)
  completedEssential.set(progress.essentialProgress >= 1 ? true : false)
  completedRecommended.set(progress.recommendedProgress >= 1 ? true : false)
  return progress.percent;
})

