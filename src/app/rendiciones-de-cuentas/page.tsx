'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.scss';

type Bulletin = { link: string; month: number; number: number; title: string; year: number };

const MONTHS = [
  { name: 'Enero', value: 1 }, { name: 'Febrero', value: 2 }, { name: 'Marzo', value: 3 },
  { name: 'Abril', value: 4 }, { name: 'Mayo', value: 5 }, { name: 'Junio', value: 6 },
  { name: 'Julio', value: 7 }, { name: 'Agosto', value: 8 }, { name: 'Septiembre', value: 9 },
  { name: 'Octubre', value: 10 }, { name: 'Noviembre', value: 11 }, { name: 'Diciembre', value: 12 },
];

const BULLETINS: Bulletin[] = [
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/rAfByXw6nei2iW2', month: 4, number: 240, title: 'Fallo 240 EPRE ABRIL A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/ftrjBgTjjrsJKxw', month: 1, number: 239, title: 'Fallo 239 PITBA ENERO A JUNIO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/dZEqLdADMSqLPf7', month: 1, number: 234, title: 'Fallo 234 ART ENERO A JUNIO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/9NbFF6CkoRcF5KP', month: 1, number: 233, title: 'Fallo 233 DPA ENERO A JUNIO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/E3mSLkDPSRCgwBe', month: 1, number: 232, title: 'Fallo 232 IPPV ENERO A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/wJ8yTAsSfLL32tM', month: 7, number: 231, title: 'Fallo 231 IUPA JULIO A DICIEMBRE 2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/ZYHNCA7MYCxtrGz', month: 1, number: 221, title: 'Fallo 221 ENDECON ENERO A JUNIO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/qQwJXqDS5dJfdDE', month: 1, number: 220, title: 'Fallo 220 ENDECIC ENERO A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/6CWK8NJEoeJnnnp', month: 1, number: 219, title: 'Fallo 219 INNOVA ENERO A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/iGEGp2Fcwmyin3a', month: 1, number: 218, title: 'Fallo 218 ENDECIC ENERO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/mn3oGRaEkYkcYSe', month: 1, number: 202, title: 'Fallo 202 INVIERTE - ENERO A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/oX8ta9S9SESzZJn', month: 1, number: 201, title: 'Fallo 201 INNOVA - ENERO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/o3AymMidsAooKnX', month: 1, number: 200, title: 'Fallo 200 INVIERTE - ENERO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/gKC7Dis7HBZfqow', month: 7, number: 199, title: 'Fallo 199 ENDECIC - JULIO A DICIEMBRE 2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/bzBfmiptEsyW5z9', month: 1, number: 184, title: 'Fallo 184 EPRE - ENERO A MARZO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/PxgSzmPn44nkKad', month: 4, number: 183, title: 'Fallo 183 ENDEVAM - abril a junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/4NBAxWG5CixGDJk', month: 12, number: 182, title: 'Fallo 182 ENDEVAM - DICIEMBRE 2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/MZwwQJstHGsXLWs', month: 7, number: 180, title: 'Fallo 180 IAPS - JUL A DIC 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/SAtMs7qBWo6Msc5', month: 1, number: 174, title: 'Fallo 174 ENDEVAM - ENERO A MARZO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/zdgySDPGJy5iLfz', month: 1, number: 173, title: 'Fallo 173 EXPORTA - ENERO A JUNIO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/Jq2YccNHWgjZF4a', month: 7, number: 172, title: 'Fallo 172 EXPORTA - JULIO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/idcq28bEDYAg3Xt', month: 6, number: 170, title: 'Fallo 170 M. Seguridad y Justicia - Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/CNFprqP2nzrEPb4', month: 6, number: 169, title: 'Fallo 169 Ministerio de Gobierno - Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/S6992BsiiZt7RRw', month: 1, number: 168, title: 'Fallo 168 Secretaria General - Enero y Febrero 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/9FzyKbC3G2XK9zt', month: 6, number: 167, title: 'Fallo 167 Planificación - Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/pw7Nt7Q9cckE3Qw', month: 7, number: 166, title: 'Fallo 166 ENTE REGION SUR JULIO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/4xDL4qJtx3Dy5BR', month: 12, number: 165, title: 'Fallo 165 APASA DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/55jBqnRtNDiiqQD', month: 4, number: 164, title: 'Fallo 164 CORREDOR BIOCEANICO ABRIL A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/LEb5HBiHxFxCdQ7', month: 4, number: 163, title: 'Fallo 163 ERPSAE ABRIL A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/NCgXLREYdPrfkw4', month: 1, number: 162, title: 'Fallo 162 LOTERIA ENERO A MARZO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/9BHfpWqSwM7wdDf', month: 4, number: 161, title: 'Fallo 161 LOTERIA ABRIL A JUNIO 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/T4kqYHEd7Ztxy6C', month: 7, number: 160, title: 'Fallo 160 IPPV JULIO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/dkFbciCQqbYoMM6', month: 1, number: 159, title: 'Fallo 159 PITBA ENERO A JUNIO 2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/7zEBEnLNoB4Rn2z', month: 7, number: 158, title: 'Fallo 158 ENTE REGION SUR ENERO A MARZO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/pDKZtcjXwbFZYrP', month: 7, number: 157, title: 'Fallo 157 APASA JULIO A OCTUBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/Pfm6F9x3jKyjCpZ', month: 5, number: 156, title: 'Fallo 156 Ministerio de Gobierno - Mayo 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/dTRqdxS4jr46eKF', month: 1, number: 155, title: 'Fallo 155 SPLIF - Enero a Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/R9KjMrmaDtCLmB8', month: 7, number: 154, title: 'Fallo 154 Contaduria - Julio a Diciembre 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/Mr2MSgByaCfqNtx', month: 1, number: 153, title: 'Fallo 153 SISTAU - Enero a Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/8zz3Ka8CozRRCbd', month: 1, number: 152, title: 'Fallo 152 Cooperativas - Enero a Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/rDwK9DXjs4YoorB', month: 7, number: 151, title: 'Fallo 151 IPAP JULIO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/sHzDar52pErk3oP', month: 7, number: 150, title: 'Fallo 150 INNOVA JULIO A DICIEMBRE 2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/bDqGpNn9NqYcDP7', month: 7, number: 149, title: 'Fallo 149 CREAR JULIO A DIC 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/k9iTLJJqD332keD', month: 7, number: 148, title: 'Fallo 148 GRANIZO JULIO A DIC 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/GeGAR422HHgeMQR', month: 1, number: 147, title: 'Fallo 147 GRANIZO ENERO A MARZO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/drEsrmTbD9Fpdr3', month: 6, number: 146, title: 'Fallo 146 IDEVI JULIO A DICIEMBRE 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/drEsrmTbD9Fpdr3', month: 1, number: 145, title: 'Fallo 145 ECO ENERO A JUNIO 2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/iS27CiepAM4rM3F', month: 4, number: 144, title: 'Fallo 144 Planficación - Abril 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/msYwbit9iCBDKjs', month: 3, number: 143, title: 'Fallo 143 Planficación - Marzo 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/zck2P9P3EqtXqoW', month: 4, number: 142, title: 'Fallo 142 MOSySP Nº Abril a Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/gTpa5gR4EP23zJJ', month: 4, number: 141, title: 'Fallo 141 SENAF Nº Abril a Junio 2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/tnmrns3T8j63nNq', month: 1, number: 140, title: 'Fallo 140 APASA Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/NTw75KCGBRpbXKe', month: 10, number: 139, title: 'Fallo 139 EPRE Nº Octubre/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/PwpnEyJQAE4HrB5', month: 7, number: 138, title: 'Fallo 138 INVIERTE Nº Julio/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/XEFTGYEK4MxAbFB', month: 1, number: 137, title: 'Fallo 137 CORREDOR BIOCEANICO Nº Enero/2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/YzsbZC9979YxkeP', month: 7, number: 136, title: 'Fallo 136 ENDECON Nº Julio/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/MCWpYpfLwfjn2BX', month: 7, number: 134, title: 'Fallo 134 ECO Nº Julio/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/8PtzASJa2E8mzsx', month: 7, number: 131, title: 'Fallo 131 Comisiones de Fomento Nº Julio/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/ZZW9MzDHYxRYJiz', month: 3, number: 130, title: 'Fallo 130 Ministerio de Seguridad y Justicia Nº Marzo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/C57R3X4YRkTEw55', month: 4, number: 129, title: 'Fallo 129 Comisiones de Fomento Nº Abril/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/tYNEmj2z794znCw', month: 10, number: 128, title: 'Fallo 128 Secretaria General Nº Octubre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/tYNEmj2z794znCw', month: 1, number: 125, title: 'Fallo 125 Secretaria de Cultura Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/jcMEpeDXMcpjNxN', month: 5, number: 124, title: 'Fallo 124 Planificación Nº Mayo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/HfgJf8Jp75MgEWD', month: 11, number: 123, title: 'Fallo 123 EXPORTA Nº Noviembre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/NeAj5Yf8RtD6stf', month: 1, number: 122, title: 'Fallo 122 IPPV Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/LCXPKPgKQBFB9E4', month: 1, number: 121, title: 'Fallo 121 EDRS Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/dzxaLmcS23rp4Y6', month: 1, number: 120, title: 'Fallo 120 ART Nº Enero/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/aC5mRaysPmYmkZn', month: 4, number: 119, title: 'Fallo 119 ENREPAVI Nº Abril/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/xqp6EwNijHLf7Px', month: 7, number: 118, title: 'Fallo 118 ART Nº Julio/2023', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/EtMLBSQQwJ6dfrg', month: 4, number: 117, title: 'Fallo 117 Fondo de Asistencia Técnica Nº Abril/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/6HPzAkgwYeK8SgN', month: 1, number: 113, title: 'Fallo 113 Ministerio de Educación Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/Pf87EzHfcLjd5q6', month: 1, number: 112, title: 'Fallo 112 SENAF Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/o6NSaQzQrPGaLiT', month: 3, number: 111, title: 'Fallo 111 Ministerio de Turismo Nº Marzo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/2cfof3tn2c3TLpd', month: 3, number: 110, title: 'Fallo 110 Ministerio de Producción Nº Marzo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/ttgy4nKStNSfosk', month: 2, number: 109, title: 'Fallo 109 Cultura Nº Febrero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/GHH7j9sGiSeqCsr', month: 3, number: 108, title: 'Fallo 108 MDHyAS Nº Marzo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/dmxt5Rf4F7b2Xit', month: 1, number: 107, title: 'Fallo 107 Ministerio de Turismo Nº Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/RByYFXewmJpndTn', month: 4, number: 106, title: 'Fallo 106 Poder Judicial Nº Abril/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/mcA4qMr8mgpxLbG', month: 8, number: 105, title: 'Fallo 105 Loteria Nº Agosto/2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/r3MFTCjWFKHGgP7', month: 8, number: 104, title: 'Fallo 104 ENDEVAM Nº Agosto/2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/GCkj5Qg84DNA4NX', month: 8, number: 103, title: 'Fallo 103 APASA Agosto/2024', year: 2024 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/KddeNLBFYA5n3gT', month: 12, number: 101, title: 'Fallo 101 MDHyAS Diciembre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/EXQ5kPPKHyYCb32', month: 12, number: 100, title: 'Fallo 100 CPSP Diciembre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/gQH7e2J4cwCB5CN', month: 10, number: 99, title: 'Fallo 99 CPE Octubre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/yco6ENY7jePZjD6', month: 3, number: 98, title: 'Fallo 98 Fiscalia de Estado Marzo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/Byz2Zdw77CL2bP6', month: 12, number: 97, title: 'Fallo 97 IPROSS Diciembre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/NnFWDEwTwaN79FG', month: 1, number: 96, title: 'Fallo 96 MDHyAS Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/Hsig8tQHHYB2FwM', month: 1, number: 95, title: 'Fallo 95 Ministerio de Seguridad y Justicia Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/8GL6ogaCFS9K3rd', month: 3, number: 94, title: 'Fallo 94 Jefatura de Policia Marzo/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/qewxjN39mjs3cCs', month: 11, number: 93, title: 'Fallo 93 IPROSS Noviembre/2022', year: 2022 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/r2rMxrCMTHTr3y4', month: 1, number: 92, title: 'Fallo 92 Poder Legislativo Enero/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/EMoQp8XcEd63dcp', month: 4, number: 91, title: 'Fallo 91 Defensoria del Pueblo Abril/2023', year: 2023 },
  { link: 'https://nube.tribcuentasrionegro.gov.ar/index.php/s/cG9Zkw4SsfGSr2q', month: 8, number: 82, title: 'Fallo 82 GRANIZO Agosto/2024', year: 2024 },
];

const ITEMS_PER_PAGE = 10;

export default function RendicionesdeCuentasPage() {
  const [titleFilter, setTitleFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return BULLETINS.filter((b) => {
      if (monthFilter !== '' && b.month !== Number(monthFilter)) return false;
      if (numberFilter !== '' && !String(b.number).toLowerCase().includes(numberFilter.toLowerCase())) return false;
      if (titleFilter !== '' && !b.title.toLowerCase().includes(titleFilter.toLowerCase())) return false;
      if (yearFilter !== '' && !String(b.year).toLowerCase().includes(yearFilter.toLowerCase())) return false;
      return true;
    });
  }, [titleFilter, numberFilter, monthFilter, yearFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handleChange =
    (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value);
      setCurrentPage(1);
    };

  const selectPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="fade-in mt-5 px-custom row">
      <div className="col-12 text-center">
        <div className="col-12">
          <h2 className="h4 mb-5" style={{ color: '#34373E' }}>
            RENDICIONES DE CUENTAS
          </h2>
        </div>
      </div>

      <div className="col-12 mb-5">
        <p style={{ textAlign: 'justify' }}>
          Síntesis de Fallos digitalizados del Tribunal de Cuentas de la Provincia de Río Negro.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Las mismas cumplimentan el procedimiento dispuesto en Circular N° 2 y N° 3 emitidas por la Dirección de Despacho y Boletín Oficial de la provincia de Río Negro.
        </p>

        <div className="mb-3 mt-5 row">
          <div className="col-12 col-md-5 mb-2">
            <input
              className="form-control"
              placeholder="Buscar por título"
              type="text"
              value={titleFilter}
              onChange={handleChange(setTitleFilter)}
            />
          </div>
          <div className="col-12 col-md-3 mb-2">
            <input
              className="form-control"
              placeholder="Buscar por número"
              type="number"
              value={numberFilter}
              onChange={handleChange(setNumberFilter)}
            />
          </div>
          <div className="col-12 col-md-2 mb-2">
            <select
              className="form-select"
              value={monthFilter}
              onChange={handleChange(setMonthFilter)}
            >
              <option value="">Buscar por mes</option>
              {MONTHS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-2 mb-2">
            <select
              className="form-select"
              value={yearFilter}
              onChange={handleChange(setYearFilter)}
            >
              <option value="">Buscar por año</option>
              {[2022, 2023, 2024].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul className={`${styles.bulletinList} list-group`}>
              {paginated.map((b, i) => (
                <li
                  key={i}
                  className="d-flex fade-in justify-content-between list-group-item"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(b.link, '_blank')}
                >
                  <strong>{b.title}</strong>
                  <i className="fa-regular fa-file-pdf" style={{ marginTop: '5px' }} />
                </li>
              ))}
            </ul>
          </div>

          {totalPages > 1 && (
            <div className="col-12 d-flex justify-content-center mt-2">
              <nav>
                <ul className="pagination">
                  <li
                    className={`page-item ${safePage === 1 ? 'disabled' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <a className="page-link" onClick={() => selectPage(safePage - 1)}>
                      <strong>&lt;</strong>
                    </a>
                  </li>
                  {pages
                    .filter((p) => p === safePage - 1 || p === safePage || p === safePage + 1)
                    .map((p) => (
                      <li
                        key={p}
                        className={`page-item ${p === safePage ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <a className="page-link" onClick={() => selectPage(p)}>
                          {p}
                        </a>
                      </li>
                    ))}
                  <li
                    className={`page-item ${safePage === totalPages ? 'disabled' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <a className="page-link" onClick={() => selectPage(safePage + 1)}>
                      <strong>&gt;</strong>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
