async function runCode() {
    const url = 'https://domain-api-com';
    try {
      return await fetch(url);
    } catch {
      throw new Error('API Not Found');
    }
  }
  runCode();