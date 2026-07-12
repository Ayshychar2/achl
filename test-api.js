async function test() {
  const res = await fetch('http://localhost:3000/api/admin/courses/1/sessions', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId: 1, meetLink: 'https://test.com' })
  });
  console.log(res.status, res.statusText);
  const text = await res.text();
  console.log(text);
}
test();
