import { useRouter } from "next/router";

function Developer() {
  const router = useRouter();
  const value=router.query.developer;
  console.log(value);
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  let check;
  if(value!=='1' && value!=='2' && value!=='3'){
    check=true;
  }
  return (
    <div>
        {value==='1' && <h1>{details[0].name}-{details[0].role}</h1>}
        {value==='2' && <h1>{details[1].name}-{details[1].role}</h1>}
        {value==='3' && <h1>{details[2].name}-{details[2].role}</h1>}
        {check && <h1>Developer does not exist.</h1>}
    </div>
  );
}

export default Developer;
