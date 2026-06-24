export async function checkHealth(){
  const res = await fetch("http://localhost:3000/health");

  if(!res.ok){
    throw new Error(`HTTP Error: ${res.status}`)
  }

  return res.json();
}
