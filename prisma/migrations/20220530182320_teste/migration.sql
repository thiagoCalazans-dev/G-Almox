-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fornecedor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT
);
INSERT INTO "new_Fornecedor" ("bairro", "cep", "cidade", "cnpj", "complemento", "endereco", "id", "nome", "numero") SELECT "bairro", "cep", "cidade", "cnpj", "complemento", "endereco", "id", "nome", "numero" FROM "Fornecedor";
DROP TABLE "Fornecedor";
ALTER TABLE "new_Fornecedor" RENAME TO "Fornecedor";
CREATE UNIQUE INDEX "Fornecedor_cnpj_key" ON "Fornecedor"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
