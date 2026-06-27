export async function getActivities(){
  const res = await fetch("http://localhost:3000/activities");

  if(!res.ok){
    throw new Error(`HTTP error: ${res.status}`)
  }

  return res.json();
}
