import path from 'path';
import fs from 'fs';
import { parse } from 'csv-parse/sync';


export interface LoginDet {
  type: string;
  email: string;
  password: string;
  message: string;
}


export function csvdata(): LoginDet[] {
  const filepath = path.resolve(__dirname, "../../test-data/login.csv");
  const filecontent = fs.readFileSync(filepath, 'utf-8');
  return parse(filecontent, {
    trim: true,
    columns: true,
    skip_empty_lines: true
  }) as LoginDet[];
}
