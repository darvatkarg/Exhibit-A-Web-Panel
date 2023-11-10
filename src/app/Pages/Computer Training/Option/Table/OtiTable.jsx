import React from "react";
import { Table } from "reactstrap";

function OtiTable() {
  return (
    <Table bordered responsive className="container">
      <thead>
        <tr>
          <th>S/N</th>
          <th>District</th>
          <th>Name of Your School</th>
          <th>Training Venue</th>
          <th>Start Date</th>
          <th>Start Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>BIAKOYE </td>
          <td>
            <div>BIAKOYE COMMUNITY SENIOR HIGH</div>
            <div>NKONYA SENIOR HIGH </div>
            <div>BOWIRI COMMUNITY SENIOR HIGH TECHNICAL </div>
            <div>TAPAMAN SENIOR HIGH TECHNICAL </div>
            <div>WORAWORA SENIOR HIGH TECHNICAL </div>
            <div>BOWIRI AMANFROM E P J H S</div>
            <div>KWAMIKROM L A A&B J H S</div>
            <div>KWAMIKROM NEW TOWN D A J H S</div>
            <div>NKONYA KADJEBI D A BASIC SCHOOL</div>
            <div>NKONYA NTSUMURU E P J H S</div>
            <div>NKONYA NTUMDA PRESBY BASIC SCHOOL</div>
            <div>NKONYA SENIOR HIGH D A BASIC SCHOOL</div>
            <div>NKONYA SENIOR HIGH D A BASIC SCHOOL</div>
            <div>ST JOSEPH R C J H S APESOKUBI</div>
            <div>TAPA ABOTOASE D A J H S</div>
            <div>TAPA ABOTOASE NURIYA ISLAMIC BASIC SCHOOL</div>
            <div>TAPA AMANFROM D A J H S</div>
            <div>TAPA AMANYA D A J H S</div>
            <div>TAPA AMANYA R C J H S</div>
          </td>
          <td>BOSTECH (ASSEMBLY HALL)</td>
          <td>THURSDAY 14TH JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>

        <tr>
          <td>2</td>
          <td>JASIKAN MUNICIPAL</td>
          <td>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
            <div>OKADJAKROM SHTS</div>
            <div>FR. DOGLI MEMORIAL INSTITUTE</div>
            <div>BAGLO RIDGE SHTS</div>
          </td>
          <td>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
          </td>
          <td>
            <div>TUESDAY, 7TH JUNE, 2022</div>
            <div>WEDNESDAY, 8TH JUNE 2022</div>
            <div>THURSDAY 9TH JUNE 2022</div>
            <div>FRIDAY 10TH JUNE 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>3</td>
          <td>GUAN DISTRICT</td>
          <td>
            <div>LOLOBI SEMINARY SHS</div>
            <div>AKPAFU SEC/ TECH SCHOOL</div>
            <div>LIKPE SHS</div>
          </td>
          <td>
            <div>LOLOBI SEMINARY SHS</div>
            <div>AKPAFU SEC/ TECH SCHOOL</div>
            <div>LIKPE SHS</div>
          </td>
          <td>
            <div>TUESDAY, 14TH JUNE, 2022</div>
            <div>WEDNESDAY, 15TH JUNE 2022</div>
            <div>THURSDAY 16TH JUNE 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>4</td>
          <td>JASIKAN MUNICIPAL</td>
          <td>
            <div>OKADJAKROM E. P J. H. S</div>
            <div>ATWEREBOANA D/A BASIC SCHOOLS</div>
            <div>AKAA D. A JHS</div>
            <div>OKADJAKROM D/A JHS</div>
            <div>KUDJE D/A JHS</div>
            <div>ATONKOR DA JHS</div>
            <div>TETEMAN RC JHS</div>
            <div>TETEMAN DA SDA BASIC</div>
            <div>NEW BAIKA DA JHS</div>
            <div>OLD BAIKA EP BASIC SCH</div>
            <div>OLD BAIKA DA JHS</div>
            <div>AWOMA DA BASIC SCHOOL</div>
            <div>BODADA PRESBY BASIC</div>
            <div>BODADA E. P. JHS</div>
            <div>D/A JHS BODADA</div>
            <div>BODADA SDA BASIC SCHOOL</div>
            <div>ST. PAUL'S ANGLICAN BASIC SCH, JASIKAN</div>
            <div>JASICO DEMONSTRATION JHS</div>
          </td>
          <td>BUEMAN SENIOR HIGH SCHOOL</td>
          <td>MONDAY, 20TH JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>5</td>
          <td>JASIKAN MUNICIPAL</td>
          <td>
            <div>JASIKAN SDA BASIC SCHOOL</div>
            <div>NURIYYAH ISLAMIC BASIC SCHOOL</div>
            <div>JASIKAN ST.PETER CLAVER R C JHS</div>
            <div>JASIKAN EP JHS</div>
            <div>KINGS PRESBY BASIC SCHOOL</div>
            <div>BAGLO-ODUMASE D/A JHS</div>
            <div>LEKANTI D/A JHS</div>
            <div>KUTE D A JHS</div>
            <div>KUTE RC JHS</div>
            <div>NEW AYOMA D/A JHS B</div>
            <div>OLD AYOMA D. A JUNIOR HIGH SCHOOL</div>
            <div>OLD AYOMA D.A JUNIOR HIGH SCHOOL</div>
            <div>BAGLO D.A J.H.S</div>
            <div>NEW AYOMA D/A J.H.S. 'A'</div>
            <div>DZOLU DA JHS </div>
            <div>ATTAKROM DA JHS</div>
            <div>KOENSIM DA BASIC SCHOOL</div>
            <div>KETSI-NKWANTA DA JHS</div>
            <div>NSUTA DA JHS</div>
            <div>GUAMAN DA JHS</div>
          </td>
          <td>BUEMAN SENIOR HIGH SCHOOL</td>
          <td>21ST JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td rowSpan={2}>6</td>
          <td rowSpan={2}>GUAN DISTRICT</td>
          <td>
            <div>SANTROKOFI GBODOME D/A JHS</div>
            <div>AKPAFU ADOKOR E.P JHS</div>
            <div>SANTROKOFI BENUA M/A JHS</div>
            <div>SANTROKOFI BUME BASIC SCHOOL</div>
            <div>AKPAFU TODZI EP PRIMARY/ M/A JHS</div>
            <div>AKPAFU MEMPEASEM MA JHS</div>
            <div>AKPAFU ODOMI D/A BASIC SCHOOL</div>
            <div>LIKPE BAKUA R C D A BASIC SCHOOL</div>
            <div>LIKPE MATE RC BASIC SCHOOL</div>
            <div>LIKPE NKWANTA D/A BASIC</div>
          </td>
          <td>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
          </td>
          <td>
            <div>22ND JUNE 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>LIKPE TODOME D/A BASIC SCHOOL</div>
            <div>LIKPE BALA R.C. BASIC SCHOOL</div>
            <div>LIKPE BALA E. P. PRIMARY/M. A. J. H. S</div>
            <div>LIKPE KUKURANTUMI MA JHS</div>
            <div>LIKPE ABRANI RC/MA BASIC SCHOOL</div>
            <div>LOLOBI ASHIAMBI M.A JHS</div>
            <div>LIKPE KUKURANTUMI E. P BASIC</div>
            <div>LIKPE KOFORIDUA M.A JUNIOR HIGH</div>
            <div>LIKPE KOFORIDUA M.A JHS</div>
            <div>LIKPE KOFORIDUA M.A JHS</div>
            <div>LOLOBI KUMASI RC JHS</div>
          </td>
          <td>
            <div>BUEMAN SENIOR HIGH SCHOOL</div>
          </td>
          <td>
            <div>25TH JUNE 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td rowSpan={7}>7</td>
          <td rowSpan={7}>KRACHI EAST MUNICIPAL</td>
          <td>
            <div>OTI SHTS</div>
          </td>
          <td>
            <div>OTI SHTS</div>
          </td>
          <td>
            <div>6/8/2022</div>
          </td>
          <td>
            <div>8.00 AM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>YABRAM COMM DAY SHS</div>
          </td>
          <td>
            <div>YABRAM COMM DAY SHS</div>
          </td>
          <td>
            <div>6/9/2022</div>
          </td>
          <td>
            <div>8.00 AM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>ASUKAWKAW SHS</div>
          </td>
          <td>
            <div>ASUKAWKAW SHS</div>
          </td>
          <td>
            <div>6/10/2022</div>
          </td>
          <td>
            <div>8.00 AM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>CHAMBA AKURA M/A BASIC</div>
            <div>KPAREKPARE VICTORY PRESBY BASIC SCHOOLS</div>
            <div>NWANE M/A BASIC SCHOOLS</div>
            <div>KPELEMA SHAMSIYA ENGLISH ARABIC BASIC SCHOOL</div>
            <div>KPELEMA HOPE FOR LIFE PRESBY BASIC SCHOOL</div>
            <div>KPELEMA M/A JHS</div>
            <div>KPAREKPARE M/A JHS</div>
            <div>AYEREM M/A JHS</div>
            <div>KPACHIRI M/A BASIC SCHOOL</div>
          </td>
          <td>
            <div>KPAREKPARE MA JHS</div>
          </td>
          <td>
            <div>15/06/2022</div>
          </td>
          <td>
            <div>9.00 AM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>ASUKAWKAW R/C JHS</div>
            <div>ASUKAWKAW M/A JHS</div>
            <div>ASUKAWKAW ENGLISH ARABIC BASIC</div>
            <div>OKANEASE M/A JHS</div>
            <div>KATANGA E/P BASIC SCHOOL</div>
            <div>MATAMANU M/A BASIC SCHOOL</div>
            <div>ZIKPO NO.2 PRESBY BASIC SCHOOL</div>
            <div>KATANGA ANUWARIYA ISLAMIC BASIC SCHOOL</div>
            <div>ADONKWANTA M/A JHS</div>
            <div>KATANGA R/C JHS</div>
            <div>ABREWANKOR M/A BASIC SCHOOL</div>
            <div>MOTORWAY M/A BASIC SCHOOL</div>
          </td>
          <td>
            <div>ASUKAWKAW SHS</div>
          </td>
          <td>
            <div>16/06/2022</div>
          </td>
          <td>
            <div>9.00 AM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>AYIRAFIE-BATTOR M/A JHS</div>
            <div>TOKUROANO M/A JHS</div>
            <div>TOKURONO ST. PAUL'S R/C JHS</div>
            <div>TOKUROANO ISLAMIC BASIC SCHOOL</div>
            <div>KPLESU M/A BASIC SCHOOLS</div>
            <div>TOKUROANO ST. FRANCIS ANGLICAN BASIC SCHOOLS</div>
            <div>KUNDA M/A BASIC SCHOOL</div>
            <div>ADUMADUM M/A BASIC SCHOOLS</div>
            <div>KADZASI KOPE M/A BASIC SCHOOL</div>
            <div>ADUKPANCHURO M/A BASIC SCHOOL</div>
            <div>ABOMBA KWADWO M/A BASIC SCHOOL</div>
            <div>DORMABIN M/A JHS</div>
          </td>
          <td>
            <div>TOKUROANO RC CHAPEL</div>
          </td>
          <td>
            <div>17/06/2022</div>
          </td>
          <td>
            <div>9.00 AM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>NJARE KUCHA M/A BASIC SCHOOL</div>
            <div>NJARE M/A BASIC SCHOOL</div>
            <div>KWAME AKURA M/A BASIC SCHOOL</div>
            <div>T.I AHMADIYYA BASIC SCHOOLS, DAMBAI</div>
            <div>YARIGA M/A BASIC SCHOOL</div>
            <div>DAMBAI ENGLISH ARABIC BASIC SCHOOL</div>
            <div>DAMBAI LAKESIDE M/A JHS</div>
            <div>DAMBAI OLDTOWN M/A JHS</div>
            <div>DAMBAI HOLY ROSARY R/C JHS</div>
            <div>DAMBAI M/A JHS</div>
            <div>DAMBAI MODEL GIRL</div>
            <div>MONKURATE M/A BASIC SCH</div>
            <div>BANKA M/A JHS</div>
            <div>DAMBAI E/P BASIC SCHOOL A</div>
            <div>DAMBAI E/P BASIC SCHOOL B</div>
            <div>KUDOR KOPE M/A BASIC SCHOOLS</div>
            <div>MEPEKOPE M/A BASIC SCHOOL</div>
            <div>DAMBAI COLLEGE OF EDU. DEMONS. BASIC SCHOOL</div>
            <div>WANKAYAW M/A JHS</div>
          </td>
          <td>
            <div>YABRAM COMM DAY SHS</div>
          </td>
          <td>
            <div>18/06/2022</div>
          </td>
          <td>
            <div>9.00 AM</div>
          </td>
        </tr>
        <tr>
          <td rowSpan={5}>8</td>
          <td rowSpan={5}>KADJEBI DISTRICT</td>
          <td>
            <div>KASEC</div>
            <div>ALL JHS IN KADJEBI , ASATO & DZINDZISO CIRCUITS</div>
          </td>
          <td>
            <div>KASEC (ASSEMBLY HALL)</div>
          </td>
          <td>
            <div>MONDAY, 13TH - WEDNESDAY, 15TH JUNE 2022</div>
          </td>
          <td>
            <div>9.00 AM - 11.30 AM</div>
            <div>1:00PM - 4:30PM</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>AHAMANSU </div>
          </td>
          <td>
            <div>AHISHS ICT LAB/CHURCH OF PENTECOST</div>
          </td>
          <td rowSpan={2}>
            <div>THURSDAY, 16TH JUNE - MONDAY, 20TH JUNE 2022</div>
          </td>
          <td>9.00 AM - 11.30 AM</td>
        </tr>
        <tr>
          <td>
            <div>POASE CEMENT</div>
          </td>
          <td>
            <div>AHISHS ICT LAB/CHURCH OF PENTECOST</div>
          </td>
          <td>1:00PM - 4:30PM</td>
        </tr>
        <tr>
          <td>
            <div>ALL JHS IN DODO AMANFROM & PAMPAWIE CIRCUITS</div>
          </td>
          <td>
            <div>DODO AMANFROM E.P CHAPEL </div>
          </td>
          <td>
            <div>TUESDAY, 21ST - THURSDAY 23RD, JUNE 2022</div>
          </td>
          <td rowSpan={2}>9.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>DODI PAPASE CIRCUIT</div>
          </td>
          <td>
            <div>DODI PAPASE SHTS ICT LAB</div>
          </td>
          <td>
            <div>MONDAY, 27TH - WEDNESDAY, 29TH JUNE 2022</div>
          </td>
        </tr>

        <tr>
          <td>9</td>
          <td>KRACHI NCHUMURU DISTRICT</td>
          <td>NCHUMURUMAN COMMUNITY DAY SHS</td>
          <td>NCHUMURUMAN COMMUNITY DAY SHS (ASSEMBLY HALL)</td>
          <td>MONDAY, 13TH JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>10</td>
          <td>KRACHI NCHUMURU DISTRICT</td>
          <td>
            <div>CHINDERI DA JHS</div>
            <div>CHINDERI S.D.A JHS</div>
            <div>CHINDERI PENTECOST JHS</div>
            <div>KRACHI NCHUMURU GIRLS MODEL JHS</div>
            <div>KORKORSE DA JHS</div>
            <div>KAKRAKA DA JHS</div>
            <div>BEJAMSE SDA JHS</div>
            <div>BEJAMSE DA JHS</div>
            <div>ANYINAMAE DA JHS</div>
            <div>BOAFRI DA JHS</div>
            <div>LONKORTOR DA JHS</div>
            <div>GRUBI DA JHS</div>
            <div>PAPATIA DA JHS</div>
            <div>KRADENTEH DA JHS</div>
            <div>AKANIEM DA JHS</div>
          </td>
          <td>NCHUMURUMAN COMMUNITY DAY SHS (ASSEMBLY HALL)</td>
          <td>WEDNESDAY, 15TH JUNE 2022 & THURSDAY, 16TH JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>11</td>
          <td>KRACHI NCHUMURU DISTRICT</td>
          <td>
            <div>BORAE NO.2 DA JHS 'A'</div>
            <div>BORAE NO.2 DA JHS 'B'</div>
            <div>BORAE FOUNDATION JHS</div>
            <div>WANANDO DA JHS</div>
            <div>CHAYO DA JHS</div>
            <div>MOTOKA NO.1 DA JHS</div>
            <div>BANDA DA JHS</div>
            <div>BANDA RC JHS</div>
            <div>BANDA ENG. ARABIC JHS</div>
            <div>BANDA BUYA DA JHS</div>
            <div>DINDOR DA JHS</div>
            <div>KORNA DOH DA JHS</div>
            <div>ZONGO MACHERI DA JHS</div>
            <div>BORAE AHENFIE DA JHS</div>
            <div>BORAE NKWANTA DA JHS</div>
          </td>
          <td>BORAE NO.2 DA JHS 'B' BANDA CHURCH OF PENTECOST</td>
          <td>FRIDAY, 17TH JUNE 2022 & MONDAY, 20TH JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>12</td>
          <td>KRACHI WEST</td>
          <td>
            <div>KRACHI SENIOR HIGH SCHOOL</div>
            <div>KRACHI SHTS </div>
          </td>
          <td>
            <div>KRACHI SENIOR HIGH SCHOOL ASSEMBLY HALL</div>
            <div>KRACH SHTS ASSEMBLY HALL</div>
          </td>
          <td>
            <div>MONDAY 13 JUNE 2022</div>
            <div>TUESDAY 14 JUNE 2022</div>
          </td>
          <td>
            <div>8.00 AM</div>
            <div>8.00AM</div>
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>KRACHI WEST</td>
          <td>
            <div>JOHN DOESWIJCK JHS</div>
            <div>BUNDA JHS</div>
            <div>KRASEC JHS</div>
            <div>SHEWU UMARU MEMORIAL JHS</div>
            <div>KETE SDA JHS</div>
            <div>GYANE KROME MA JHS</div>
            <div>BASARE JHS</div>
            <div>NKYENEKYEN MA JHS</div>
            <div>KPONFRI/DZILAKOPE MA JHS</div>
            <div>HENKEL MEMORIAL JHS</div>
          </td>
          <td>KRACHI WEST MUNICIPAL ASSEMBLY HALL</td>
          <td>THURSDAY, 16 JUNE 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>14</td>
          <td>KRACHI WEST</td>
          <td>
            <div>MONKRA MA JHS</div>
            <div>ABUJURO MA JHS</div>
            <div>GYEASAYOUR MA JHS</div>
            <div>KWAAKUA MA JHS</div>
            <div>KPATCHU MA JHS</div>
            <div>YABOARE MA JHS</div>
            <div>DADEKRO MA JHS</div>
            <div>AMEWOYIKOPE MA JHS</div>
            <div>OLD DOBESO MA JHS</div>
          </td>
          <td>MONKRA MA PRIMARY ICT LAB</td>
          <td>FRIDAY 17, JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>15</td>
          <td>KRACHI WEST</td>
          <td>
            <div>OSRAMANE MA JHS</div>
            <div>APOSTLE NTUMY JHS</div>
            <div>NTEWUSAE MA JHS</div>
            <div>EHIAMANKYEN MA JHS</div>
            <div>EHIAMANKYEN R/C A JHS</div>
            <div>TWERESO MA JHS</div>
            <div>BOMMOBEN MA JHS</div>
            <div>ANKAASE MA JHS</div>
          </td>
          <td>APOSTLY NTUMY ICT LAB</td>
          <td>MONDAY, 20 JUNE 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td rowSpan={6}>16</td>
          <td rowSpan={6}>NKWANTA NORTH</td>
          <td>
            <div>KPASSA SENIOR HIGH TECHNICAL</div>
          </td>
          <td>
            <div>KPASSA SENIOR HIGH TECHNICAL ASSEMBLY HALL</div>
          </td>
          <td>
            <div>20/06/2022</div>
          </td>
          <td rowSpan={6}>9.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>SIBI HILL-TOP D/A JHS</div>
            <div>KPASSA D/A JHS B2</div>
            <div>BISIGNAMDO D/A JHS</div>
            <div>SIBI E.P. JHS</div>
            <div>DANLADI D/A JHS</div>
            <div>SHALOM AND AGAPE D/A JHS</div>
            <div>GBORSIKE D/A JHS</div>
            <div>KOFI-NYI ECG JHS</div>
            <div>MAMA-AKURA D/A JHS</div>
            <div>NAGINGON D/A JHS</div>
          </td>
          <td>
            <div>KPASSA SENIOR HIGH TECHNICAL ASSEMBLY HALL</div>
          </td>
          <td>
            <div>14/06/2022</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>KPASSA D/A JHS B1</div>
            <div>SIBI CENTRAL D/A JHS</div>
            <div>KPASSA D/A A1</div>
            <div>KPASSA D/A JHS A2</div>
            <div>KABRE-AKURA D/A JHS</div>
            <div>KPASSA D/A JHS B4</div>
            <div>LAKPOR D/A JHS</div>
          </td>
          <td>
            <div>KPASSA SENIOR HIGH TECHNICAL ASSEMBLY HALL</div>
          </td>
          <td>
            <div>13/06/2022</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>KPASSA ECG JHS A</div>
            <div>KPASSA ENGLISH AND ARABIC JHS</div>
            <div>KABONWULE D/A JHS</div>
            <div>KPASSA D/A D/A B3</div>
            <div>KPASSA ECG JHS B</div>
            <div>KPASSA PROGRESSIVE GIRLS MODEL SCHO</div>
            <div>LEMINA D/A JHS</div>
            <div>KONI E.C.G BASIC</div>
            <div>SIBI JATO KPAREKPARE D/A JHS</div>
          </td>
          <td>
            <div>KPASSA SENIOR HIGH TECHNICAL ASSEMBLY HALL</div>
          </td>
          <td>
            <div>15/06/2022</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>DAMANKO D/A JHS A</div>
            <div>DAMANKO ENGLISH AND ARABIC JHS</div>
            <div>DAMANKO D/A JHS B</div>
            <div>PIBILA D/A JHS</div>
            <div>DAMANKO BADULI D/A JHS</div>
            <div>KPANJA D/A JHS</div>
          </td>
          <td>
            <div>ASSEMBLIES OF GOD CHAPEL</div>
          </td>
          <td>
            <div>16/06/2022</div>
          </td>
        </tr>
        <tr>
          <td>
            <div>ABUNYANYA D/A JHS A</div>
            <div>TINJASE D/A JHS</div>
            <div>AZUAH D/A JHS</div>
            <div>KOFI - AKURA D/A JHS</div>
            <div>NABU D/A JHS</div>
            <div>ABUNYANYA D/A JHS C</div>
            <div>ABUNYANYA D/A JHS B</div>
          </td>
          <td>
            <div>KPASSA SENIOR HIGH TECHNICAL ASSEMBLY HALL</div>
          </td>
          <td>
            <div>17/06/2022</div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default OtiTable;
