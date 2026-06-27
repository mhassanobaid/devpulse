export async function getStats(){
  const res = await fetch("http://localhost:3000/stats");

  if(!res.ok){
    throw new Error(`HTTP error: ${res.status}`)
  }

  return res.json();
}
