// app/test/page.tsx

export default function TestPage() {
  return (
    <main>
      <p>Token: {process.env.NOTION_TOKEN ? "YES" : "NO"}</p>
      <p>Database: {process.env.NOTION_DATABASE_ID ? "YES" : "NO"}</p>
    </main>
  );
}
