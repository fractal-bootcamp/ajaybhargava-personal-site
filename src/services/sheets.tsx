const SPREADSHEET_ID = '1Ujq3fP-dijDm0GsEHZZBT4TpmD40C8I-9-Yo2jH3ZdQ';
const SHEET_NAME = 'Sheet';

export async function fetchSheetData() {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }
    
    const data = await response.json();
    const headers = data.values[0]; // First row as keys
    const rows = data.values.slice(1); // Remaining rows as data

    // Transform array of arrays into an array of objects
    const formattedData = rows.map((row: string[]) =>
      headers.reduce((acc: Record<string, string>, key: string, index: number) => {
        acc[key] = row[index] || ""; // Handle missing values
        return acc;
      }, {} as Record<string, string>)
    );

    console.log(formattedData)

    return formattedData;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
}