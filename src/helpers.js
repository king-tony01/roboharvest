function convertToCSV(data) {
  const header = Object.keys(data[0]).join(",");
  const body = data.map((obj) => Object.values(obj).join(",")).join("\n");
  return header + "\n" + body;
}

function convertToTSV(data) {
  const header = Object.keys(data[0]).join("\t");
  const body = data.map((obj) => Object.values(obj).join("\t")).join("\n");
  return header + "\n" + body;
}

function downloadCSV(data, filename) {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

function downloadTSV(data, filename) {
  const tsv = convertToTSV(data);
  const blob = new Blob([tsv], {
    type: "text/tab-separated-values;charset=utf-8;",
  });

  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

// Example array of objects
const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];
