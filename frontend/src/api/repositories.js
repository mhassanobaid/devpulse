export async function getRepositories(){
  const res = await fetch("http://localhost:3000/repositories");

  if(!res.ok){
    throw new Error(`HTTP Error: ${res.status}`)
  }

  return res.json();
}
