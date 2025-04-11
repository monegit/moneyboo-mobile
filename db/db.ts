import { type SQLiteDatabase } from "expo-sqlite";
import moment, { Moment } from "moment";
import { LedgerType } from "@/types/ledger";

export interface Ledger {
  date: string;
  origin: string;
  amount: number;
  type: LedgerType;
  memo: string;
}

// export class Database {
//   private db: SQLiteDatabase | undefined;

//   public async CreateTable(year: number) {
//     try {
//       if (this.db === undefined) return;

//       this.db.execAsync(`--sql
// 				PRAGMA journal_mode = WAL;

// 				CREATE TABLE IF NOT EXISTS ${year} (
// 					id INTEGER PRIMARY KEY AUTOINCREMENT,
// 					createAt TEXT,
// 					date TEXT,
// 					place TEXT,
// 					goodsName TEXT,
// 					price NUMERIC,
// 					type TEXT,
// 					memo TEXT
// 				)
// 				`);
//     } catch {
//       console.log("CreateTable Error");
//     }
//   }
// }

export async function init(db: SQLiteDatabase, year?: number) {
  try {
    db.execAsync(`--sql
			PRAGMA journal_mode = WAL;
			CREATE TABLE IF NOT EXISTS [${year ?? moment().year()}] (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				createAt TEXT,
				date TEXT,
				origin TEXT,
				amount NUMERIC,
				type TEXT,
				memo TEXT
			);
			`);
  } catch {
    console.log("db init error");
  }
}

export async function insert(
  db: SQLiteDatabase,
  year: number,
  type: LedgerType,
  ledger: Ledger
) {
  try {
    db.runSync(
      `--sql
			INSERT INTO [${year}] (
				createAt, 
				date,
				origin,
				amount,
				type,
				memo
			) VALUES (
				?,?,?,?,?,?
			)`,
      moment().format("YYYY-MM-DD HH:mm:ss"),
      ledger.date,
      ledger.origin,
      ledger.amount,
      type,
      ledger.memo
    );
  } catch {
    console.log("insert db error");
  }
}

export async function getLedger(
  db: SQLiteDatabase,
  year: number,
  month: number,
  days?: number,
  type?: LedgerType
) {
  try {
    const rows: Ledger[] = await db.getAllAsync(
      `--sql
        SELECT * FROM [${year}]
        WHERE date = ?
      `,
      moment(`${year}-${month}-${days}`).format("YYYY-MM-DD")
    );
    // console.log(days !== undefined ? true : false, month, days);
    return rows;
  } catch {
    console.log("getLedger database error");
  }
}
