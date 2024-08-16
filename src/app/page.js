import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        Hello there
        
        <p>You could checkout your new home page <Link href={"/home"}>
        <span style={{color: 'blue'}}>here</span>
        </Link></p>
      </div>
    </main>
  );
}
