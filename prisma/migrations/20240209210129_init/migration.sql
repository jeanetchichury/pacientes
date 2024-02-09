-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "rg" VARCHAR(9) NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fichas_medicas" (
    "id" TEXT NOT NULL,
    "medico" UUID NOT NULL,
    "anotacoes_medicas" TEXT NOT NULL,
    "data_consulta" DATE NOT NULL,
    "risco_paciente" TEXT NOT NULL,
    "pacienteId" TEXT NOT NULL,

    CONSTRAINT "fichas_medicas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_cpf_key" ON "pacientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_rg_key" ON "pacientes"("rg");

-- AddForeignKey
ALTER TABLE "fichas_medicas" ADD CONSTRAINT "fichas_medicas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
