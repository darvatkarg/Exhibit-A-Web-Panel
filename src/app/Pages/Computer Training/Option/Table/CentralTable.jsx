import React from "react";
import { Table } from "reactstrap";

function CentralTable() {
  return (
    <Table bordered responsive className="container ">
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
          <td rowSpan={9}>1</td>
          <td rowSpan={9}>ABURA - ASEBU - KWAMANKESE</td>
          <td>
            <div>AHOMFIE D/A BASIC SCHOOL</div>
            <div>AKOKOKROM A.M.E ZION BASIC SCHOOL</div>
            <div>ASOMDWEE D/A BASIC SCHOOL</div>
            <div>ASUANSI AGRIC EXP. FARM DA BASIC SCHOOL</div>
            <div>ASUANSI D/A A&B BASIC</div>
            <div>ASUANSI D/A BASIC 'C' SCHOOL</div>
            <div>ESSANDOKROM ST. PAUL ANGLICAN BASIC SCHOOL</div>
            <div>KWEKUTU D/A BASIC</div>
            <div>MUSUNKWA D/A BASIC SCHOOL</div>
            <div>NKWANTANAN D/A BASIC SCHOOL</div>
            <div>OKYIRIKU D/A BASIC SCHOOL</div>
            <div>PAPAGYA D/A BASIC SCHOOL</div>
            <div>SRAFA D/A BASIC SCHOOL</div>
          </td>
          <td rowSpan={2}>ASUANSI TECHNICAL INSTITUTE</td>
          <td rowSpan={2}>15TH JUNE & 16TH JUNE 2022</td>
          <td>12:30PM - 3PM</td>
        </tr>

        <tr>
          <td>ASUANSI TECHNICAL INSTITUTE</td>
          <td>9AM - 11:30AM</td>
        </tr>
        <tr>
          <td>
            <div>ABAKRAMPA CATHOLIC BASIC SCHOOL</div>
            <div>ABAKRAMPA METHODIST BASIC 'A' SCHOOL</div>
            <div>ABAKRAMPA METHODIST BASIC 'B' SCHOOL</div>
            <div>ABAKRAMPA NANA OTU D/A BASIC SCHOOL</div>
            <div>ABAKRAMPA ST. AUGUSTINE'S ANGLICAN BASIC SCHOOL</div>
            <div>ABUENU D/A BASIC SCHOOL</div>
            <div>ASEMASE A.M.E. ZION BASIC SCHOOL</div>
            <div>ESSAMAN AME ZION BASIC SCHOOL</div>
            <div>GYANDOKROM D/A BASIC SCHOOL</div>
            <div>NEW EBU METHODIST BASIC SCHOOL</div>
            <div>NEW EBU ST. SIMON'S CATHOLIC BASIC SCHOOL</div>
            <div>OLD EBU-BREBIA D/A BASIC</div>
            <div>TSETSEKASUM AME ZION BASIC SCHOOL</div>
          </td>
          <td rowSpan={2}>ABAKRAMPA SENIORHIGH/TECH SCHOOL</td>
          <td rowSpan={2}>17TH JUNE & 18TH JUNE 2022</td>
          <td>12:30AM - 3PM</td>
        </tr>
        <tr>
          <td>
            <div>ABAKRAMPA SENIOR HIGH SCHOOL</div>
            <div>ABAASA/SUROWODOFO D/A BASIC SCHOOL</div>
            <div>AKONOMA D/A BASIC</div>
            <div>APEWOSIKA METHODIST BASIC SCHOOL</div>
            <div>ASEBU CATHOLIC BASIC SCHOOL</div>
            <div>ASEBU D/A BASIC 'A'</div>
            <div>ASEBU D/A BASIC 'B'</div>
            <div>ASEBU EKROFUL CATHOLIC BASIC SCHOOL</div>
            <div>BATANYAA D/A BASIC</div>
            <div>OHIABA D/A BASIC SCHOOL</div>
            <div>PRA-EWUSI D/A ISLAMIC BASIC</div>
            <div>PUTUBIW D/A BASIC SCHOOL</div>
            <div>WUSORKROM D/A BASIC</div>
          </td>
          <td>9AM - 11:30AM</td>
        </tr>
        <tr>
          <td>ABURAMAN SENIOR HIGH SCHOOL</td>
          <td rowSpan={2}>ABURA DUNKWA METHODIST CHURCH</td>
          <td rowSpan={2}>22ND JUNE & 23RD JUNE 2022</td>
          <td>9AM - 11:30AM</td>
        </tr>
        <tr>
          <td>
            <div>ABURA DUNKWA BAIDEN WALKER D/A EXP. 'A&B' JHS</div>
            <div>ABURA DUNKWA CATHOLIC BASIC 'A'</div>
            <div>ABURA DUNKWA CATHOLIC BASIC 'B'</div>
            <div>ABURA DUNKWA ISLAMIC BASIC SCHOOL</div>
            <div>ABURA DUNKWA METHODIST BASIC 'A' SCHOOL</div>
            <div>ABURA DUNKWA METHODIST BASIC 'B'</div>
            <div>ABURA ENYINABIRIM D/A BASIC SCHOOL</div>
            <div>EDUMFA AKABOHA D/A BASIC SCHOOL</div>
            <div>EMPIRO D/A BASIC SCHOOL</div>
            <div>NYANFEKU EKROFUL CATHOLIC BASIC SCHOOL</div>
            <div>NYANFEKU EKROFUL METHODIST BASIC SCHOOL</div>
            <div>ODUMEKYIR A.M.E. ZION BASIC 'B'</div>
            <div>ODUMEKYIR AME ZION PRIMARY/JHS A</div>
            <div>TUAKWA D/A BASIC SCHOOL</div>
            <div>ANSAFONA D/A BASIC SCHOOL</div>
            <div>APONAPONDO ROYAL HOME D/A BASIC</div>
            <div>AYELDO ST. AUGUSTINE'S CATHOLIC BASIC / ABOMPI KG</div>
            <div>BOSOMIN D/A BASIC / NYAMEBEKYERE KG</div>
            <div>KATAKYIASE CATHOLIC BASIC SCHOOL</div>
            <div>KORADO D/A BASIC SCHOOL</div>
            <div>KWADOEGYA D/A BASIC SCHOOL</div>
            <div>KWAMAN METHODIST BASIC SCHOOL</div>
            <div>NEW ODONASE D/A CATHOLIC BASIC</div>
            <div>ODOMPO D/A BASIC SCHOOL</div>
            <div>OLD ODONASE UNLOCK A.M.E ZION BASIC</div>
            <div>PATOAKO METHODIST BASIC SCHOOL</div>
            <div>SEKYEREW AME ZION BASIC SCHOOL</div>
            <div>ABEADZE ODUMASE A.M.E ZION BASIC SCHOOL</div>
            <div>ABOASE/OBOHEN D/A BASIC SCHOOL</div>
            <div>ABOASE/OBOHEN METHODIST BASIC SCHOOL</div>
            <div>AFRANGUA D/A BASIC SCHOOL</div>
            <div>BANDO ISLAMIC BASIC SCHOOL</div>
            <div>EGUATSIA KOKODO D/A BASIC SCHOOL</div>
            <div>GYABANKROM D/A METHODIST BASIC</div>
            <div>MPESEDUADZE D/A METHODIST BASIC</div>
            <div>OBOKA D/A BASIC</div>
            <div>OBOKOR S.D.A BASIC</div>
          </td>
          <td>12:30PM - 3PM</td>
        </tr>
        <tr>
          <td>AGGREY MEMORIAL AME ZION SHS</td>
          <td rowSpan={3}>AGGREY MEMORIAL AME ZION BASIC SCHOOL</td>
          <td rowSpan={2}>27TH JUNE & 28TH JUNE 2022</td>
          <td>9AM - 11:30AM</td>
        </tr>
        <tr>
          <td>MOREE COMMUNITY SENIOR HIGH SCHOOL</td>
          <td>12:30PM - 3PM</td>
        </tr>
        <tr>
          <td>
            <div>ABURA EDUKROM D/A BASIC SCHOOL</div>
            <div>AMOSIMA CATHOLIC BASIC SCHOOL</div>
            <div>AMOSIMA METHODIST BASIC SCHOOL</div>
            <div>BRAFOYAW A.M.E ZION 'B' BASIC SCHOOL</div>
            <div>BRAFOYAW A.M.E ZION BASIC SCHOOL 'A'</div>
            <div>MOREE CATHOLIC BASIC 'A' SCHOOL</div>
            <div>MOREE CATHOLIC BASIC 'B' SCHOOL</div>
            <div>MOREE D/A BASIC 'A' SCHOOL</div>
            <div>MOREE D/A BASIC 'B' SCHOOL</div>
            <div>MOREE METHODIST 'A&B' BASIC SCHOOL</div>
            <div>WIOMUA CATHOLIC BASIC</div>
          </td>
          <td>29TH JUNE & 30TH JUNE 2022</td>
          <td>9AM - 11:30AM</td>
        </tr>
        <tr>
          <td rowSpan={5}>2</td>
          <td rowSpan={5}>AJUMAKO-ENYAN-ESSIAM</td>
          <td>MANDO SENIOR HIGH SCHOOL </td>
          <td rowSpan={2}>MANDO SHS HALL </td>
          <td>WED., 15TH JUNE, 2022</td>
          <td rowSpan={5}>9:00AM</td>
        </tr>
        <tr>
          <td>
            ABAASA TECHNICAL INSTITUTE / ABAASA CURCUIT (ALL JHS TEACHERS)
          </td>
          <td>THURS, 16TH, JUNE, 2022</td>
        </tr>
        <tr>
          <td>ENYAN DENKYIRA SHS </td>
          <td>ENYAN DENKYIRA </td>
          <td>FRI. 17TH JUNE, 2022</td>
        </tr>
        <tr>
          <td>BISEASE SHS </td>
          <td>BISEASE SHS </td>
          <td>MON.,20TH JUNE, 2022</td>
        </tr>
        <tr>
          <td>ENYANMAIM SHS / ENYANMAIM CURCUIT (ALL JHS TEACHERS)</td>
          <td>ENYANMAIM SHS</td>
          <td>TUES, 21ST, JUNE, 2022</td>
        </tr>
        <tr>
          <td>3</td>
          <td>AJUMAKO-ENYAN-ESSIAM</td>
          <td>AJUMAKO CIRCUIT </td>
          <td>ASSASAN D/A BASIC SCHOOL </td>
          <td>WED. 22ND JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td rowSpan={2}>4</td>
          <td rowSpan={2}>AJUMAKO-ENYAN-ESSIAM</td>
          <td>BISEASE CURCUIT</td>
          <td>BISEASE SHS </td>
          <td>THUR. 23RD JUNE, 20222</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>AMIA BA CURCUIT </td>
          <td>BA METHODIST JHS</td>
          <td>FRI. 24TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td rowSpan={2}>5</td>
          <td rowSpan={2}>AJUMAKO-ENYAN-ESSIAM</td>
          <td>DENKYIRA CIRCUIT </td>
          <td>ENYAN DENKYIRA SHS </td>
          <td>TUES 28, JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>SONKWA CURCUIT </td>
          <td>SONKWAA CATHOLIC JHS </td>
          <td>WED. 29TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td rowSpan={8}>6</td>
          <td rowSpan={8}>AGONA EAST</td>
          <td>
            <div>NAMANWORA COMMUNITY DAY SHS</div>
            <div>NSABA PRESBY SHS</div>
          </td>
          <td>NSABA PRESBY SHS ICT LAB</td>
          <td>WED. 15TH & THUR. 16TH JUNE 2022.</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>
            <div>AGONA NKRAN ISLAMIC BASIC SCHOOL.</div>
            <div>KWESI PAINTSIL ZION BASIC</div>
            <div>NINTA METHODIST BASIC</div>
            <div>NSABA A.M.E ZION BASIC SCHOOL</div>
            <div>NSABA CATHOLIC BASIC SCHOOL</div>
            <div>NSABA PRESBY J.H.S SCHOOL</div>
            <div>OFOASE A.E.D.A BASIC SCHOOL</div>
            <div>SETH OKAI AEDA BASIC SCHOOL</div>
            <div>NSABA A&B METHODIST JHS</div>
            <div>NSABA ISLAMIC JHS</div>
            <div>NSABA METHODIST A&B BASIC</div>
          </td>
          <td>NSABA PRESBY SHS ICT LAB</td>
          <td>MON. 20TH & TUE. 21ST JUNE 2022.</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>SWEDRU SHS</td>
          <td>SWEDRU SHS ASSEMBLY HALL</td>
          <td>THUR. 23RD & FRI. 24TH JUNE, 2022</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>
            <div>DUAKWA CATHOLIC BASIC SCHOOL</div>
            <div>DUABONE CATHOLIC BASIC SCHOOL</div>
            <div>DUAKWA METHODIST BASIC SCHOOL</div>
            <div>DUOTU AEDA BASIC SCHOOL</div>
            <div>KWESIKUM AEDA BASIC SCHOOL</div>
            <div>DUAKWA PRESBY JHS </div>
            <div>AMANFUL NO.1 A.E.D.A. PRIMARY/JHS </div>
            <div>AMANFUL HOLY QURAN BASIC SCHOOL</div>
            <div>AMANFUL NO.1 METHODIST BASIC SCHOOL</div>
            <div>DUAKWA AEDA J.H.S</div>
            <div>DUAKWA ISLAMIC BASIC SCHOOL</div>
            <div>MANGOASE/NKUMKUMSO AEDA BASIC SCHOOL</div>
            <div>DUAKWA SALVATION ARMY BASIC SCHOOL</div>
          </td>
          <td>SWEDRU SHS ASSEMBLY HALL</td>
          <td>MON 27TH & TUE. 28TH JUNE, 2022</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>
            <div>DUAKWA CATHOLIC BASIC SCHOOL</div>
            <div>DUABONE CATHOLIC BASIC SCHOOL</div>
            <div>DUAKWA METHODIST BASIC SCHOOL</div>
            <div>DUOTU AEDA BASIC SCHOOL</div>
            <div>KWESIKUM AEDA BASIC SCHOOL</div>
            <div>DUAKWA PRESBY JHS </div>
            <div>AMANFUL NO.1 A.E.D.A. PRIMARY/JHS </div>
            <div>AMANFUL HOLY QURAN BASIC SCHOOL</div>
            <div>AMANFUL NO.1 METHODIST BASIC SCHOOL</div>
            <div>DUAKWA AEDA J.H.S</div>
            <div>DUAKWA ISLAMIC BASIC SCHOOL</div>
            <div>MANGOASE/NKUMKUMSO AEDA BASIC SCHOOL</div>
            <div>DUAKWA SALVATION ARMY BASIC SCHOOL</div>
          </td>
          <td>SWEDRU SHS ASSEMBLY HALL</td>
          <td>MON 27TH & TUE. 28TH JUNE, 2022</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>KWANYAKO SHS</td>
          <td>KWANYAKO SHS ICT LAB</td>
          <td>THUR 30TH JUN- FRI 1ST JULY, 2022</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ASAFO A.E.D.A. 'B' BASIC SCHOOL</div>
            <div>ASAFO A.E.D.A. 'A' BASIC SCHOOL</div>
            <div>ASAFO S.D.A BASIC SCHOOL</div>
            <div>AGONA NANTIFA A.E.D.A. BASIC SCHOOL</div>
            <div>KWANSAKROM AEDA A BASIC SCHOOL</div>
            <div>ASAFO A.M.E ZION BASIC SCHOOL</div>
            <div>ASAFO PRESBY JHS</div>
            <div>KWANSAKROM AEDA AEDA B BASIC SCHOOL</div>
            <div>FAWOMANYE A.E.D.A J.H.S </div>
            <div>GYESIKROM A.E.D.A. BASIC SCHOOL</div>
            <div>KWANYAKO ANGLICAN BASIC SCHOOL</div>
            <div>KWANYAKO CATHOLIC BASIC SCHOOL</div>
            <div>KWANYAKO METHODIST BASIC SCHOOL</div>
            <div>KWANYAKO PRESBY A&B J.H.S</div>
            <div>KWANYAKO S.D.A J.H.S SCHOOL</div>
            <div>KWESITWIKROM A.E.D.A. BASIC SCHOOL</div>
            <div>OTWEKROM A.E.D.A BASIC SCHOOL</div>
            <div>SUROMANYA A.E.D.A. BASIC SCHOOL</div>
            <div>ITIFAQIYA ISLAMIC BASIC SCHOOL</div>
          </td>
          <td>SWEDRU SHS ASSEMBLY HALL</td>
          <td>TUE. 5TH - WED. 6TH JULY, 2022</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ABOANO A.E.D.A BASIC SCHOOL</div>
            <div>AKWAKWAA A.E.D.A BASIC SCHOOL</div>
            <div>ESUSU NO.1 METHODIST BASIC SCHOOL</div>
            <div>FANTE BAWJIASE AEDA BASIC SCHOOL</div>
            <div>KENYANKOR A.E.D.A J.H.S</div>
            <div>KWAME NTSIFUL/FUAWHINA AEDA BASIC SCHOOL</div>
            <div>MANKRONG A.E.D.A. BASIC SCHOOL</div>
            <div>MANKRONG METHODIST BASIC SCHOOL</div>
            <div>OBOSOMASE ANGLICAN BASIC SCHOOL</div>
            <div>AKWAKWAA PRESBY BASIC SCHOOL</div>
            <div>MENSAKWAA AEDA BASIC SCHOOL</div>
            <div>AKOKOASA AEDA BASIC SCHOOL</div>
            <div>ASAREKWAA AEDA BASIC SCHOOL</div>
            <div>MANKRONG JUNCTION AEDA A&B J.H.S</div>
            <div>MANKRONG-JUNCTION NAZIFATU ISLAMIC BASIC SCHOOL</div>
            <div>NAMANWORA S.D.A BASIC SCHOOL</div>
            <div>OKITSEW-OBRATWAWU AEDA BASIC SCHOOL</div>
            <div>AMANFUL NO.2 AEDA BASIC SCHOOL</div>
          </td>
          <td>KWANYAKO SHS ICT LAB</td>
          <td>TUE. 12TH - WED. 13TH JULY, 2022</td>
          <td>10:00AM</td>
        </tr>
        <tr>
          <td rowSpan={4}>7</td>
          <td rowSpan={4}>EFFUTU MUNICIPAL</td>
          <td>WINNEBA SECONDARY SCHOOL</td>
          <td>WINNEBA SECONDARY SCHOOL (ASSEMBLY HALL)</td>
          <td>WEDNESDAY, 15TH & THURSDAY,16TH JUNE 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>AME ZION 'D' JHS</div>
            <div>UNIPRA NORTH JHS</div>
            <div>PRESBYTERIAN JHS</div>
            <div>NEW WINNEBA M/A JHS</div>
            <div>ANSARUDEEN ISLAMIC JHS</div>
            <div>ANSAFUL M/A JHS </div>
            <div>WINNEBA M/A JHS</div>
          </td>
          <td>CHURCH OF CHRIST CHAPEL</td>
          <td>TUESDAY, 21ST & WEDNESDAY, 22ND JUNE 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>NTAKORFAM M/A JHS</div>
            <div>ST. JOHN ANGLICAN JHS</div>
            <div>METHODIST 'B' JHS</div>
            <div>A.M.E ZION A/B/C JHS</div>
            <div>UNIPRA SOUTH A/B JHS</div>
            <div>UNIPRA SOUTH 'C' JHS</div>
            <div>UNIPRA SOUTH INCLUSIVE JHS</div>
            <div>METHODIST A/C JHS</div>
          </td>
          <td>CHURCH OF CHRIST CHAPEL</td>
          <td>TUESDAY, 28TH & WEDNESDAY, 29TH JUNE 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>DON BOSCO CATHOLIC 'A' JHS </div>
            <div>OSBONPANYIN/ATEITU M/A JHS</div>
            <div>DON BOSCO CATHOLIC 'B' JHS </div>
            <div>GYANGYANADZE M/A JHS</div>
            <div>ACM JHS</div>
            <div>ATEKYEDO M/A JHS</div>
            <div>GYAHADZE M/A JHS</div>
            <div>ESSUEKYIR M/A JHS</div>
          </td>
          <td>CHURCH OF CHRIST CHAPEL</td>
          <td>TUESDAY, 5TH & WEDNESDAY, 6TH JULY 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td rowSpan={5}>8</td>
          <td rowSpan={5}>ASIKUMA-ODOBEN-BRAKWA</td>
          <td>BREMAN ASIKUMA SHS </td>
          <td>BASS ASSEMBLY HALL</td>
          <td> 15TH -17TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ODOBEN SHS</div>
            <div>BRAKWA SHS</div>
          </td>
          <td>ODOBEN ASSEMBLY HALL</td>
          <td>20TH - 22ND JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ADUMANU D/A BASIC</div>
            <div>ANHWIAM D/A BASIC 'A'</div>
            <div>ANHWIAM D/A BASIC 'B' SCHOOL</div>
            <div>ANKAASE D/A BASIC</div>
            <div>ASABEM NEW FAITH BAPTIST BASIC</div>
            <div>BREMAN BISEASE D/A BASIC</div>
            <div>ESSUMAN-GWIRA D/A BASIC SCHOOL</div>
            <div>OHIANHYEDA D/A BASIC</div>
            <div>SOWOTUOM BASIC SCHOOL</div>
            <div>ABUAKUWA CATHOLIC BASIC SCHOOL</div>
            <div>AKROMA/ ADZENYEWODZE D/A BASIC</div>
            <div>ASIKUMA CATHOLIC BOYS BASIC</div>
            <div>ASIKUMA CATHOLIC GIRLS BASIC SCHOOL</div>
            <div>ASIKUMA COL. BAIDOO D/A JHS </div>
            <div>ASIKUMA PRESBYTERIAN BASIC SCHOOL</div>
            <div>ASIKUMA T.I. AHMADIYYA BASIC SCHOOL</div>
            <div>BAAKO D/A BASIC 'A'</div>
            <div>BAAKO D/A BASIC 'B' SCHOOL</div>
            <div>ENIEHU D/A BASIC</div>
            <div>FANKYENKO D/A BASIC</div>
            <div>KOKOADO D/A BASIC</div>
            <div>KYIRAKAA D/A BASIC</div>
            <div>OKUKROM D/A BASIC</div>
            <div>SUPUNSO DA BASIC SCHOOL</div>
            <div>ABEHENASE CARGILL D/A BASIC</div>
            <div>AMOANDA CATHOLIC BASIC SCHOOL</div>
            <div>AMOANDA D/A BASIC</div>
            <div>ASIKUMA METHODIST 'A' BASIC</div>
            <div>ASIKUMA METHODIST 'B' BASIC SCHOOL</div>
            <div>ATU-WASS D/A J.H.S</div>
            <div>BEDUM METHODIST BASIC SCHOOL</div>
            <div>BEDUM PRESBY BASIC SCHOOL</div>
            <div>BEDUM ST. JOACHIM CATHOLIC BASIC SCHOOL</div>
            <div>BEDUM T.I AHMADIYYA BASIC SCHOOL</div>
            <div>BREMAN NWOMASO D/A BASIC SCHOOL</div>
            <div>NWOMASO METHODIST BASIC</div>
          </td>
          <td>ASIKUMA METHODIST CHURCH</td>
          <td>23RD, 24TH & 27TH JUNE, 2022 </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>AFOFOSU PRESBY BASIC</div>
            <div>ASAREKWAA A.F ISLAMIC BASIC</div>
            <div>BRAKWA CATHOLIC BASIC SCHOOL</div>
            <div>BRAKWA D/A BASIC SCHOOL</div>
            <div>BRAKWA METHODIST BASIC SCHOOL</div>
            <div>BRAKWA PRESBY J.H.S</div>
            <div>BRAKWA-ESHIEM D/A BASIC</div>
            <div>BRAKWA-KOKOSO ISLAMIC 'A' BASIC</div>
            <div>EDUOSIA D/A BASIC SCHOOL</div>
            <div>OFABIR D/A BASIC</div>
            <div>OGONASO D/A BASIC</div>
            <div>ADANDAN D/A BASIC SCHOOL</div>
            <div>ASUOKOO D/A BASIC</div>
            <div>BENIN CATHOLIC 'A' BASIC</div>
            <div>BENIN CATHOLIC BASIC 'B'</div>
            <div>JAMRA D/A BASIC</div>
            <div>JAMRA METHODIST BASIC</div>
            <div>JAMRA ST. AUGUSTINES ANGLICAN BASIC SCHOOL</div>
            <div>JAMRA ST. JOSEPH'S CATHOLIC BASIC SCHOOL</div>
            <div>OCHISOA DA BASIC</div>
            <div>TOWOBOASE D/A BASIC</div>
            <div>AMANFOPONG METHODIST BASIC SCHOOL</div>
            <div>AMANFOPONG PRESBY BASIC</div>
            <div>ASANTEM METHODIST KG/PRIMARY D/A J.H.S BASIC</div>
            <div>FOSUANSA CATHOLIC BASIC SCHOOL</div>
            <div>FOSUANSA METHODIST BASIC</div>
            <div>KOKOSO CATHOLIC BASIC</div>
            <div>KOKOSO METHODIST BASIC</div>
            <div>OTABILKWAA D/A BASIC SCHOOL</div>
            <div>AMANOR DA PRESBY BASIC</div>
            <div>BRAKWA-KOKOSO ISLAMIC 'B' BASIC SCHOOL</div>
          </td>
          <td>ASIKUMA METHODIST CHURCH</td>
          <td>28TH - 30TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ASEMPANAYE DA BASIC</div>
            <div>BOAME NKWANTA D/A BASIC</div>
            <div>BOSOMASE D/A BASIC</div>
            <div>EYIPEY CATHOLIC BASIC SCHOOL</div>
            <div>KUNTANASE CATHOLIC BASIC SCHOOL</div>
            <div>KUNTANASE METHODIST J.H.S</div>
            <div>KUNTANASE PRESBYTERIAN BASIC</div>
            <div>KUNTANASE SALVATION ARMY BASIC SCHOOL</div>
            <div>KWANAN D/A BASIC</div>
            <div>SUPUNA D/A BASIC SCHOOL</div>
            <div>YENKUKWAA PRESBY. BASIC</div>
            <div>EYIPEY D/A BASIC</div>
            <div>DOMEABRA D/A BASIC SCHOOL</div>
            <div>NANKESE D/A BASIC</div>
            <div>NKWANTA ESHIEM D/A BASIC</div>
            <div>ODOBEN A.M.E ZION BASIC</div>
            <div>ODOBEN AMA-FUA D/A BASIC</div>
            <div>ODOBEN CATHOLIC BASIC </div>
            <div>ODOBEN D/A J.H.S</div>
            <div>ODOBEN ISLAMIC BASIC SCHOOL</div>
            <div>ODOBEN METHODIST BASIC SCHOOL</div>
            <div>ODOBEN PRESBYTERIAN BASIC 'A'</div>
            <div>ODOBEN PRESBYTERIAN BASIC 'B'</div>
            <div>ODOBEN T.I AHMADIYYA BASIC SCHOOL</div>
            <div>ODOKON NKWANTA CORNERSTONE ACADEMY</div>
            <div>TWEREDUA D/A BASIC</div>
          </td>
          <td>ASIKUMA METHODIST CHURCH</td>
          <td>4TH - 6TH JULY, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td rowSpan={5}>9</td>
          <td rowSpan={5}>ASSIN FOSO MUNICIPAL</td>
          <td>OBIRI YEBOAH SHS</td>
          <td>OBIRI YEBOAH SHS ASSEMBLY HALL</td>
          <td>THURSDAY, 16TH. & FRIDAY 17TH JUNE,2022</td>
          <td rowSpan={2}>9:00AM</td>
        </tr>

        <tr>
          <td>
            <div>WURAKESE CATHOLIC BASIC</div>
            <div>ASSIN AKROPONG PRESBYTERIAN JHS</div>
            <div>WURAKESE M/A JHS</div>
            <div>OBRAWOMIAM BASIC</div>
            <div>WURAKESE M/A BASIC</div>
            <div>WURAKESE CAMP M/A BASIC</div>
          </td>
          <td>FOSO PRESBYTERIAN CHURCH</td>
          <td>MONDAY, 27TH & TUESDAY 28TH JUNE,2022</td>
        </tr>
        <tr>
          <td>
            <div>ASSIN ASAMAN M/A BASIC SCHOOL</div>
            <div>AWISEM M/A JHS</div>
            <div>AWISEM HAJJ IDRISS BASIC SCHOOL</div>
            <div>NYARDOAM M/A BASIC SCHOOL</div>
            <div>OSMAN AZUMA M/A BASIC</div>
            <div>SWEDRU AKWAPIM M/A BASIC SCHOOL</div>
            <div>ASSIN OBRAYEKO M/A JHS</div>
          </td>
          <td>FOSO PRESBYTERIAN CHURCH</td>
          <td>MONDAY, 27TH & TUESDAY 28TH JUNE,2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>AFFUTUAKWA M/A BASIC</div>
            <div>APONSIE M/A BASIC SCHOOL</div>
            <div>ASSIN FOSO SDA BASIC</div>
            <div>ASSIN NYANKOMASI M/A BASIC</div>
            <div>ASSIN NYANKOMASI CATHOLIC BASIC</div>
            <div>BROFOYEDUR M/A BASIC SCHOOL</div>
            <div>FOSO CATHOLIC "C" BASIC</div>
            <div>FOSO CATHOLIC "A" BASIC</div>
            <div>FOSO HOLY SPIRIT ANGLICAN BASIC SCHOOL</div>
            <div>JUASO M/A BASIC SCHOOL</div>
            <div>NYANKOMASI NYAMEBEKYERE D/A JHS</div>
            <div>FOSO CATHOLIC "B" BASIC</div>
            <div>ASSIN MESRE NYAME M/A BASIC</div>
            <div>ALHUDA ISLAMIC COMPLEX SCHOOL</div>
          </td>
          <td>FOSO PRESBYTERIAN CHURCH</td>
          <td>WEDNESDAY, 29TH & THURSDAY 30TH JUNE,2022 </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>A TONSU ST CECILIA ANGLICAN JHS</div>
            <div>DOMPIM METHODIST JHS</div>
            <div>FOSCO DEMONSTRATION "B" M/A BASIC</div>
            <div>FOSCO DEMONSTRATION "A" M/A BASIC</div>
            <div>FOSO ANSARUDEEN BASIC SCHOOL</div>
            <div>FOSO METHODIST A' BASIC</div>
            <div>FOSO METHODIST B' BASIC</div>
            <div>FOSO ODUMASI M/A JHS</div>
            <div>FOSO PRESBYTERIAN BASIC SCHOOL</div>
            <div>FOSO RAILWAYS STATION A' BASIC SCHOOL</div>
            <div>FOSO RAILWAYS STATION B' BASIC SCHOOL</div>
            <div>DOMPIM FAITH ACADEMY BASIC SCHOOL</div>
            <div>WURAKESE STATION M/A BASIC SCHOOL</div>
          </td>
          <td>FOSO PRESBYTERIAN CHURCH</td>
          <td>MONDAY ,4TH & TUEDAYS 5TH JULY 2022</td>
          <td>9:00AM</td>
        </tr>

        <tr>
          <td rowSpan={3}>10</td>
          <td rowSpan={3}>ASSIN NORTH</td>
          <td>ASSIN NORTH SHS, ASSIN STATE COLLEGE & GYAASE SHS</td>
          <td>ASSIN NORTH SHS ASSEMBLY HALL </td>
          <td> MONDAY, 13TH & TUESDAY 14TH JUNE, 2020</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>NYAME NNAE, BEREKU AND PRASO CIRCUITS </td>
          <td> ASSIN NORTH SHS ASSEMBLY HALL </td>
          <td>WEDNESDAY, 15TH & THURSDAY 16TH JUNE, 2022</td>
          <td>11:30AM</td>
        </tr>
        <tr>
          <td>AKONFUDI, ODUMASI & BASOFI NINGO & CIRCUITS</td>
          <td> CHURCH OF PENTECOST, ASSIN AKONFUDI</td>
          <td>MONDAY, 20TH & TUESDAY, 21ST JUNE, 2022</td>
          <td>11:30AM</td>
        </tr>
        <tr>
          <td rowSpan={3}>11</td>
          <td rowSpan={3}>ASSIN SOUTH</td>
          <td>
            <div>ASSIN MANSO SHS</div>
            <div>ADADIENTEM PRESBY BASIC A</div>
            <div>ADADIENTEM PRESBY BASIC B</div>
          </td>
          <td>ASSIN MANSO SHS ASSEMBLY HALL</td>
          <td>TUESDAY, 5TH JULY, 2022 WEDNESDAY, 6TH JULY, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>ASSIN NSUTA SHS</div>
            <div>ABOABO CAMP D/A BASIC </div>
            <div>ADIEMBRA CATH. BASIC B</div>
            <div>ADIEMBRA CATHOLIC BASIC A</div>
            <div>ADUBIASE METHODIST BASIC</div>
            <div>ADUBIASE PRESBY BASIC</div>
            <div>AKROFUOM D/A BASIC </div>
            <div>AKROFUOM METHODIST BASIC</div>
            <div>AMANBETE D/A BASIC</div>
            <div>AKOTEYKROM NO.1 D/A BASIC</div>
            <div>AKOTEYKROM NO.2 D/A BASIC</div>
          </td>
          <td>ADUBIASE METHODIST CHURCH</td>
          <td>TUESDAY, 5TH JULY, 2022 WEDNESDAY, 6TH JULY, 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>ADANKWAMAN SHS </div>
            <div>NYANKUMASI AHENKRO SHS</div>
            <div>ABEASE-TUMFOKOR D/A BASIC</div>
            <div>ACHIASE BASIC SCHOOL</div>
            <div>AHENKRO D/A EXP BASIC A</div>
            <div>AHENKRO D/A EXP. BASIC B</div>
            <div>AHENKRO METHODIST BASIC </div>
          </td>
          <td>NGRESI PENTICOST CHURCH</td>
          <td>THURSDAY,7TH JULY, 2022 FRIDAY,8TH JULY, 2022 </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>12</td>
          <td>AWUTU SENYA</td>
          <td>SENYA SHS</td>
          <td>SENYA SHS ASSEMBLE HALL</td>
          <td>20TH -22ND JUNE, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>13</td>
          <td>AWUTU SENYA</td>
          <td>
            <div>AWUTU WINTON SHS</div>
            <div>BONTRASE SHTS</div>
          </td>
          <td>AWUTU WINTON SHS ASSEMBLE HALL</td>
          <td>23RD - 27TH JUNE,2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>14</td>
          <td>AWUTU SENYA</td>
          <td>OBRACHIRE SHTS</td>
          <td>OBRACHIRE SHS ICT LAB</td>
          <td>24TH -27TH JUNE, 2022</td>
          <td>08.00 AM</td>
        </tr>
        <tr>
          <td>15</td>
          <td>AWUTU SENYA</td>
          <td>AWUTU BAWJIASE COMM. SHS</td>
          <td>AWUTU BAWJIASE ASSEMBLE HALL</td>
          <td>28TH -30TH JUNE, 2022</td>
          <td>12.00 PM</td>
        </tr>
        <tr>
          <td>16</td>
          <td>AWUTU SENYA</td>
          <td>SENYA CIRUIT</td>
          <td>SENYA A.M.E ZION CHURCH</td>
          <td>20TH -22ND JUNE, 2022</td>
          <td>12.00 PM</td>
        </tr>
        <tr>
          <td>17</td>
          <td>AWUTU SENYA</td>
          <td>
            <div>AWUTU CIRCUIT</div>
            <div>BONTRASE CIRCUIT</div>
          </td>
          <td>BREKU PENTECOST CHURCH</td>
          <td>23RD - 27TH JUNE,2022</td>
          <td>12:00:PM</td>
        </tr>
        <tr>
          <td>18</td>
          <td>AWUTU SENYA</td>
          <td>
            <div>AYENSUAKO CIRCUIT</div>
            <div>OBRACHIRE CIRCUIT</div>
            <div>BAWJIASE A CIRCUIT</div>
          </td>
          <td>BAWJIASE METHODIST CHURCH</td>
          <td>4TH- 6TH JULY, 2022</td>
          <td>08.00 AM</td>
        </tr>
        <tr>
          <td>19</td>
          <td>AWUTU SENYA</td>
          <td>
            <div>BAWJIASE B CIRCUIT</div>
            <div>JEI - KRODUA CIRCUIT</div>
          </td>
          <td>JEI - KRODUA ASSEMBLIES OF GOD CHURCH</td>
          <td>4TH- 6TH JULY, 2022</td>
          <td>12.00.PM</td>
        </tr>
        <tr>
          <td>20</td>
          <td>AWUTU SENYA EAST</td>
          <td>
            <div>ODUPONG SHS</div>
            <div>AWUSHIE TETTEH</div>
            <div>KWAO BONDZIE</div>
          </td>
          <td>ODUPONG SHS ASSEMBLY HALL</td>
          <td>21ST - 23RD JUNE, 2022</td>
          <td>08.00 AM</td>
        </tr>
        <tr>
          <td>21</td>
          <td>AWUTU SENYA EAST</td>
          <td>
            <div>BANAT ABDALLAH (GROUP A)</div>
            <div>SALMANIYYA BASIC (GROUP A)</div>
            <div>ODUPONG KPEHE AME ZION (GROUP A)</div>
            <div>ODUPONG KPEHE M/A JHS (GROUP A)</div>
            <div>KASOA METHODIST JHS (GROUP A)</div>
            <div>DR. SHEIKH NUHU (GROUP A)</div>
            <div>KASOA ISLAMIC RESEARCH (GROUP A)</div>
            <div>EMMANUEL PRESBY JHS (GROUP A)</div>
            <div>ST. MARTHA'S CATHOLIC JHS (GROUP A)</div>
            <div>AMUZUKORPE REAL FAITH (GROUP A)</div>
            <div>IRON CITY (GROUP A)</div>
          </td>
          <td>ST. MARTHA'S CATHOLIC JHS</td>
          <td>28TH - 30TH JUNE, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>22</td>
          <td>AWUTU SENYA EAST</td>
          <td>
            <div>KUMBE ISLAMIC (GROUP A)</div>
            <div>OPEIKUMA ANGLICAN (GROUP A)</div>
            <div>ST. MARY'S ANGLICAN (GROUP A)</div>
            <div>ICODEHS BASIC (GROUP A)</div>
            <div>OFAAKOR M/A (GROUP A)</div>
            <div>GADA M/A BASIC (GROUP A)</div>
            <div>NAHADATU ISLAMIC (GROUP A)</div>
            <div>ZAKARIKORPE SDA (GROUP A)</div>
          </td>
          <td>ST. MARY'S ANGLICAN JHS</td>
          <td>5TH - 7TH JULY, 2022</td>
          <td>8:00AM</td>
        </tr>
        <tr>
          <td>23</td>
          <td>AWUTU SENYA EAST</td>
          <td>
            <div>BANAT ABDALLAH (GROUP B)</div>
            <div>SALMANIYYA BASIC (GROUP B)</div>
            <div>ODUPONG KPEHE AME ZION (GROUP B)</div>
            <div>ODUPONG KPEHE M/A JHS (GROUP B)</div>
            <div>KASOA METHODIST JHS (GROUP B)</div>
            <div>DR. SHEIKH NUHU (GROUP B)</div>
            <div>KASOA ISLAMIC RESEARCH (GROUP B)</div>
            <div>EMMANUEL PRESBY JHS (GROUP B)</div>
            <div>ST. MARTHA'S CATHOLIC JHS (GROUP B)</div>
            <div>AMUZUKORPE REAL FAITH (GROUP B)</div>
            <div>IRON CITY (GROUP B)</div>
          </td>
          <td>ST. MARTHA'S CATHOLIC JHS</td>
          <td>28TH - 30TH JUNE, 2022</td>
          <td>1:00PM</td>
        </tr>
        <tr>
          <td>24</td>
          <td>AWUTU SENYA EAST</td>
          <td>
            <div>KUMBE ISLAMIC (GROUP B)</div>
            <div>OPEIKUMA ANGLICAN (GROUP B)</div>
            <div>ST. MARY'S ANGLICAN (GROUP B)</div>
            <div>ICODEHS BASIC (GROUP B)</div>
            <div>OFAAKOR M/A (GROUP B)</div>
            <div>GADA M/A BASIC (GROUP B)</div>
            <div>NAHADATU ISLAMIC (GROUP B)</div>
            <div>ZAKARIKORPE SDA (GROUP B)</div>
          </td>
          <td>ST. MARY'S ANGLICAN JHS</td>
          <td>5TH - 7TH JULY, 2022</td>
          <td>1PM</td>
        </tr>
        <tr>
          <td rowSpan={4}>25</td>
          <td rowSpan={4}>CAPE COAST METRO</td>
          <td>
            <div>ABOOM CIRCUIT</div>
            <div>BAKAANO CIRCUIT</div>
            <div>CAPE COAST</div>
            <div>EFUTU CIRCUIT</div>
            <div>OLA CIRCUIT</div>
            <div>PEDU/ABURA CIRCUIT</div>
          </td>
          <td>WESLEY GIRLS' HIGH SCHOOL</td>
          <td>
            <div>MONDAY, 20TH JUNE, 2022 </div>
            <div>TUESDAY, 21ST JUNE, 2022</div>
          </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>WESLEY GIRLS' HIGH SCHOOL</div>
            <div>ACADEMY OF CHRIST THE KING</div>
            <div>ADISADEL COLLEGE</div>
            <div>EFUTU SECONDARY/TECHNICAL SCHOOL</div>
          </td>
          <td>WESLEY GIRLS' HIGH SCHOOL</td>
          <td>
            <div>WEDNESDAY, 22ND JUNE 2022 </div>
            <div>THURSDAY, 23RD JUNE, 2022</div>
          </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>HOLY CHILD SCHOOL</div>
            <div>GHANA NATIONAL COLLEGE</div>
            <div>MFANTSIPIM SCHOOL</div>
            <div>OGUAA SNR. HIGH TECHNICAL SCHOOL</div>
          </td>
          <td>WESLEY GIRLS' HIGH SCHOOL</td>
          <td>
            <div>FRIDAY, 24TH JUNE, 2022 </div>
            <div>MONDAY. 27TH JUNE 2022</div>
          </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>CAPE COAST TECHNICAL INSTITUTE</div>
            <div>UNIVERSITY PRACTICE SENIOR HIGH SCHOOL</div>
            <div>ST. AUGUSTINE'S COLLEGE</div>
          </td>
          <td>WESLEY GIRLS' HIGH SCHOOL</td>
          <td>
            <div>TUESDAY, 28TH JUNE, 2022</div>
            <div>WEDNESDAY, 29TH JUNE, 2022</div>
          </td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td rowSpan={4}>26</td>
          <td rowSpan={4}>Bhavnagar</td>
          <td>WINNEBA SECONDARY SCHOOL</td>
          <td>WINNEBA SECONDARY SCHOOL (ASSEMBLY HALL)</td>
          <td>WEDNESDAY, 15TH & THURSDAY,16TH JUNE 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>AME ZION 'D' JHS</div>
            <div>UNIPRA NORTH JHS</div>
            <div>PRESBYTERIAN JHS</div>
            <div>NEW WINNEBA M/A JHS</div>
            <div>ANSARUDEEN ISLAMIC JHS</div>
            <div>ANSAFUL M/A JHS </div>
            <div>WINNEBA M/A JHS</div>
          </td>
          <td>CHURCH OF CHRIST CHAPEL</td>
          <td>TUESDAY, 21ST & WEDNESDAY, 22ND JUNE 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>NTAKORFAM M/A JHS</div>
            <div>ST. JOHN ANGLICAN JHS</div>
            <div>METHODIST 'B' JHS</div>
            <div>A.M.E ZION A/B/C JHS</div>
            <div>UNIPRA SOUTH A/B JHS</div>
            <div>UNIPRA SOUTH 'C' JHS</div>
            <div>UNIPRA SOUTH INCLUSIVE JHS</div>
            <div>METHODIST A/C JHS</div>
          </td>
          <td>CHURCH OF CHRIST CHAPEL</td>
          <td>TUESDAY, 28TH & WEDNESDAY, 29TH JUNE 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>DON BOSCO CATHOLIC 'A' JHS </div>
            <div>OSBONPANYIN/ATEITU M/A JHS</div>
            <div>DON BOSCO CATHOLIC 'B' JHS </div>
            <div>GYANGYANADZE M/A JHS</div>
            <div>ACM JHS</div>
            <div>ATEKYEDO M/A JHS</div>
            <div>GYAHADZE M/A JHS</div>
            <div>ESSUEKYIR M/A JHS</div>
          </td>
          <td>CHURCH OF CHRIST CHAPEL</td>
          <td>TUESDAY, 5TH & WEDNESDAY, 6TH JULY 2022</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td rowSpan={8}>27</td>
          <td rowSpan={8}>EKUMFI</td>
          <td>
            <div> JOHN EVANS ATTA MILLS SENIOR HIGH SCHOOL</div>
            <div>AKYIN SENIOR HIGH SCHOOL </div>
            <div>EKUMFI T.I AHMADIYYA SENIOR HIGH SCHOOL</div>
          </td>
          <td rowSpan={8}>DEO SUPERVISION ROOM - ESSARKYIR</td>
          <td rowSpan={2}>
            MONDAY, 20TH JUNE, 2022 - WEDNESDAY, 22ND JUNE, 2022
          </td>
          <td>09:30AM -11:00AM</td>
        </tr>
        <tr>
          <td>
            <div> JOHN EVANS ATTA MILLS SENIOR HIGH SCHOOL</div>
            <div>AKYIN SENIOR HIGH SCHOOL </div>
            <div>EKUMFI T.I AHMADIYYA SENIOR HIGH SCHOOL</div>
          </td>
          <td>12:00PM - 02:30PM</td>
        </tr>
        <tr>
          <td>ESSARKYIR CIRUITS</td>
          <td rowSpan={2}>
            THURSDAY, 23RD JUNE, 2022 - MONDAY, 27TH JUNE, 2022
          </td>
          <td>09:30AM -11:00AM</td>
        </tr>
        <tr>
          <td>ESSUEHYIA CIRCUITS</td>
          <td>12:00PM - 02:30PM</td>
        </tr>
        <tr>
          <td>EYISAM CIRCUITS</td>
          <td rowSpan={2}>
            TUESDAY, 28TH JUNE 2022 - THURSDAY, 30TH JUNE, 2022
          </td>
          <td>09:30AM -11:00AM</td>
        </tr>
        <tr>
          <td>DUNKWA CIRCUITS</td>
          <td>12:00PM - 02:30PM</td>
        </tr>
        <tr>
          <td>NARKWA CIRCUITS</td>
          <td rowSpan={2}>
            MONDAY, 4TH JULY, 2022 - WEDNESDAY, 6TH JULY, 2022
          </td>
          <td>09:30AM -11:00AM</td>
        </tr>
        <tr>
          <td>OTUAM CIRCUITS</td>
          <td>12:00PM - 02:30PM</td>
        </tr>
        <tr>
          <td rowSpan={4}>28</td>
          <td rowSpan={4}>GOMOA CENTRAL</td>
          <td>
            <div>NSUAEM DA JHS</div>
            <div>ABONYI DA/CATH. JHS</div>
            <div>ABAASA NO.1 PRESBY JHS</div>
            <div>AWOMBREW METH. JHS</div>
            <div>OGUAAKROM/NYANKUADZE DA JHS</div>
            <div>CHAPESS OSSAMADIH DA JHS</div>
            <div>POMADZE/ASEBU DA A&B JHS</div>
            <div>MPOTA MAMPONG ADAWUKWA DA JHS</div>
          </td>
          <td>PENTECOST CHURCH, POMADZE.</td>
          <td>TUES. 7TH & WED. 8TH JUNE 2022.</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>EKWAMKROM SDA JHS</div>
            <div>EKWAMKROM METH. JHS</div>
            <div>BROFOYEDUR CATH. DA JHS</div>
            <div>BROFOYEDUR MANGOASE DA JHS</div>
            <div>OSAMKROM DA JHS</div>
            <div>AYENSUADZE PRESBY JHS</div>
            <div>GOMOA MANSO NO.1 JHS</div>
            <div>JUKWA CATH. DA JHS</div>
          </td>
          <td>LATTER DAY SAINT CHURCH, EKWAMKROM.</td>
          <td>TUES.14TH & WED.15TH JUNE, 2022.</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>
            <div>ABOSO BENSO DA A JHS</div>
            <div>ABOSO BENSO DA B JHS</div>
            <div>ABOSO BENSO DA C JHS</div>
            <div>ABOSO BENSO AME ZION JHS</div>
            <div>AKROPONG NO.2 JHS</div>
            <div>OTAPIROW DA JHS</div>
          </td>
          <td>GOSPEL AMBASSADORS CHURCH, GOMOA ABOSO.</td>
          <td>THURS.16TH & FRI.17TH JUNE, 2022.</td>
          <td>12:00 PM</td>
        </tr>
        <tr>
          <td>
            <div>GOMOA GYAMAN SHS</div>
            <div>OGYEEDOM SHTS</div>
            <div>AFRANSI DA A&B JHS</div>
            <div>ACHIASE BESEADZE DA JHS</div>
            <div>ACHIASE METH. JHS</div>
            <div>DAHOM DA JHS</div>
            <div>AFRANSI AME ZION JHS</div>
            <div>AFRANSI METH. JHS</div>
            <div>KWAME ADWER DA JHS</div>
            <div>ABAMKWAAMU DA JHS</div>
            <div>LOME DA ISLAMIC JHS</div>
            <div>ESIKUMA METH. JHS</div>
            <div>GYAMAN METH. DA JHS</div>
            <div>OBUASI DA JHS</div>
            <div>IMAM MAHDI ISLAMIC JHS</div>
            <div>OFASO ANGLICAN JHS</div>
            <div>OBUASI PRESBY JHS</div>
          </td>
          <td>GOMOA GYAMAN SHS</td>
          <td>TUES. 5TH & WED. 6TH JULY, 2022.</td>
          <td>12:00PM</td>
        </tr>
        <tr>
          <td>29</td>
          <td>GOMOA EAST</td>
          <td>POTSIN T.I AHMADIYYA SHS</td>
          <td>POTSIN T.I AHM. SHS DINING HALL</td>
          <td>15TH JUNE - 17TH JUNE,2022</td>
          <td>
            <div>9:30AM - 12:00 PM </div>
            <div>1:00 PM - 3:30 PM</div>
          </td>
        </tr>
        <tr>
          <td rowSpan={2}>30</td>
          <td rowSpan={2}>GOMOA EAST</td>
          <td>POTSIN CIRCUIT BASIC SCHOOLS</td>
          <td rowSpan={2}>POTSIN T.I AHM. SHS DINING HALL</td>
          <td rowSpan={2}>21ST JUNE - 23RD JUNE, 2022</td>
          <td>9:30AM - 12:00 PM </td>
        </tr>
        <tr>
          <td>BUDUATTA CIRCUIT BASIC SCHOOLS</td>
          <td>1:00 PM - 3:30 PM</td>
        </tr>
        <tr>
          <td rowSpan={2}>31</td>
          <td rowSpan={2}>GOMOA EAST</td>
          <td>FETTEHMAN SHS </td>
          <td rowSpan={2}>FETTEHMAN SHS ASSEMBLY HALL</td>
          <td rowSpan={2}>27TH JUNE - 28TH JUNE,2022</td>
          <td>10:00 AM - 1 : 20 PM</td>
        </tr>
        <tr>
          <td>BASIC SCHOOLS IN FETTEH</td>
          <td>10:00 AM - 1 : 20 PM</td>
        </tr>
        <tr>
          <td rowSpan={2}>32</td>
          <td rowSpan={2}>GOMOA EAST</td>
          <td>
            <div>OJOBI CIRCUIT BASIC SCHOOLS</div>
            <div>BUDUATTA CIRCUIT BASIC SCHOOLS</div>
          </td>
          <td rowSpan={2}>AKOTSI ZION CHURCH</td>
          <td rowSpan={2}>30TH JUNE - 1ST JULY, 2022</td>
          <td>9:00 AM - 12 : 30 PM</td>
        </tr>
        <tr>
          <td>BUDUBURAM CIRCUIT BASIC SCHOOLS</td>
          <td>1:00 PM - 4 : 30 PM</td>
        </tr>
        <tr>
          <td rowSpan={2}>33</td>
          <td rowSpan={2}>GOMOA EAST</td>
          <td>
            <div>ST. GREGORY CATHOLIC SHS</div>
            <div>BUDUBURAM BASIC SCHOOLS</div>
          </td>
          <td rowSpan={2}>ST. GREGORY CATH. BASIC SCHOOL</td>
          <td rowSpan={2}>4TH JULY - 5TH JULY,2022</td>
          <td>9:00 AM - 12 : 30 PM</td>
        </tr>
        <tr>
          <td>NYANYANO CIRCUIT BASIC</td>
          <td>1:00 PM - 4 : 30 PM</td>
        </tr>
        <tr>
          <td>34</td>
          <td>GOMOA EAST</td>
          <td>NYANYANO CIRCUIT BASIC</td>
          <td>NYANYANO METHODIST CHURCH PREMISES</td>
          <td>7TH JULY - 8TH JULY, 2022</td>
          <td>10:00 AM - 1 : 30 PM</td>
        </tr>
        <tr>
          <td rowSpan={11}>35</td>
          <td rowSpan={11}>Gomoa West</td>
          <td>
            <div>MOZANO SHS</div>
            <div>ESHIEM CATH JHS</div>
            <div>KOKOFU ISLAMIC JHS</div>
          </td>
          <td>MOZANO ICT LAB</td>
          <td>15th-17TH JUNE, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>COLLEGE OF MUSIC - MOZANO </div>
            <div>TARKWA CIRCUIT SCHOOLS</div>
            <div>ESHIEM CIRCUIT SCHOOLS</div>
          </td>
          <td>MOZANO ICT LAB</td>
          <td>15th-17TH JUNE, 2022</td>
          <td>11.00 AM</td>
        </tr>
        <tr>
          <td>GOMOA SHTS</td>
          <td rowSpan={2}>GOMOA SHTS ICT LAB</td>
          <td>20TH - 22th JUNE, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>DAWURAMPONG BASIC SCHOOLS </td>
          <td>20TH - 22th JUNE, 2022</td>
          <td>11.00 AM</td>
        </tr>
        <tr>
          <td>APAM SHS</td>
          <td rowSpan={2}>APASS ICT LAB</td>
          <td rowSpan={2}>23TH - 27th JUNE, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>APAM CIRCUIT SCHOOLS</td>
          <td>11.00 AM</td>
        </tr>
        <tr>
          <td>ANKAMU CIRCUIT SCHOOLS</td>
          <td>ALKASMIR ICT LAB</td>
          <td>28TH - 30TH JUNE, 2022</td>
          <td>8.00AM</td>
        </tr>
        <tr>
          <td>ADAA NGYIRESI BASIC SCHOOLS </td>
          <td rowSpan={4}>CIRCUIT CENTER</td>
          <td>28TH - 30TH JUNE, 2022</td>
          <td>1.00PM</td>
        </tr>
        <tr>
          <td>MPRUMEM CIRCUIT SCHOOLS</td>
          <td>1ST -5TH JULY, 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>MUMFORD BASIC SCHOOLS </td>
          <td>6TH - 8TH JULY, 2022</td>
          <td>8.00 AM</td>
        </tr>
        <tr>
          <td>ODINA OGUAA BASIC SCHOOLS </td>
          <td>6TH - 8TH JULY, 2022</td>
          <td>1.00 PM</td>
        </tr>
        <tr>
          <td rowSpan={4}>36</td>
          <td rowSpan={4}>KOMENDA-EDINA-EGUAFO-ABREM MUNICIPAL</td>
          <td>
            <div>EDINAMAN SENIOR HIGH SCHOOL </div>
            <div>KOMENDA SENIOR HIGH TECHNICAL </div>
            <div>EGUAFO SENIOR HIGH SCHOOL</div>
          </td>
          <td>ELMINA TEACHERS CREDIT UNION HALL</td>
          <td>
            <div>MONDAY, 20TH JUNE, 2022 </div>
            <div>TUESDAY, 21ST JUNE, 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>ELMINA CIRCUIT </div>
            <div>NTRONAO CIRCUIT</div>
            <div> ESSAMAN CIRCUIT</div>
          </td>
          <td>ELMINA TEACHERS CREDIT UNION HALL</td>
          <td>
            <div>WEDNESDAY, 22ND JUNE 2022 </div>
            <div>THURSDAY, 23RD JUNE, 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>KOMENDA CIRCUIT</div>
            <div>KISSI CIRCUIT</div>
            <div> DOMINASE CIRCUIT</div>
          </td>
          <td>ELMINA TEACHERS CREDIT UNION HALL</td>
          <td>
            <div>FRIDAY, 24TH JUNE, 2022</div>
            <div>MONDAY. 27TH JUNE 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>
            <div>AYENSUDO CIRCUIT</div>
            <div>AGONA CIRCUIT</div>
          </td>
          <td>ELMINA TEACHERS CREDIT UNION HALL</td>
          <td>
            <div>TUESDAY, 28TH JUNE, 2022</div>
            <div>WEDNESDAY, 29TH JUNE, 2022</div>
          </td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td rowSpan={9}>37</td>
          <td rowSpan={9}>MFANTSEMAN</td>
          <td>KWEGYIR AGGEY SHS</td>
          <td>KWEGYIR AGGREY SHS </td>
          <td> 15TH -16TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>MFANTSIMAN GIRLS SHS </td>
          <td>MFANTSIMAN GIRLS SHS</td>
          <td>20TH - 21ST JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>SALTPOND METHODIST SHS</td>
          <td>SALTPOND METH SHS</td>
          <td>22ND - 23RD JUNE, 2022</td>
          <td>9.00 AM</td>
        </tr>
        <tr>
          <td>MANKESSIM SHS</td>
          <td>SHS MANKESSIM </td>
          <td>23RD - 24TH JUNE, 2023</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>YAMORANSA M/A BASIC</div>
            <div>YAMORANSA CATHOLIC BASIC SCHOOL</div>
            <div>ASAFORA CATHOLIC BASIC SCHOOL</div>
            <div>MT. ZION METHODIST BASIC</div>
            <div>WAAKROM CATHOLIC BASIC</div>
            <div>EGYIRFA M/A BASIC SCHOOL</div>
            <div>EGUASE ANGLICAN BASIC SCHOOL</div>
            <div>ST. MICHAEL'S CATHOLIC BASIC, AKATAKYIWA</div>
            <div>KOBINA ANSA M/A KG/PRIMARY/J.H.S</div>
            <div>AMISSAKROM-EKROFUL CATH.BASIC SCHOOL</div>
            <div>KOBINA ANSA SHS</div>
            
          </td>
          <td>YAMORANSA CATH BASIC</td>
          <td>25TH, 27TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ABEADZE SHS</div>
            <div>GIRLS MODEL SCHOOL ABEADZE KYEAKOR</div>
            <div>FREEMAN METHODIST BASIC SCHOOL</div>
            <div>KWESIL ANSAH M/A BASIC SCHOOL</div>
            <div>TAABOSOM M/A BASIC SCHOOL</div>
            <div>KWAKROM ANGLICAN BASIC</div>
            <div>DOMINASE ANGLICAN BASIC SCHOOL</div>
            <div>DOMINASE M/A BASIC SCHOOL</div>
            <div>KYEAKOR M/A BASIC SCHOOL</div>
            <div>ABEADZE AKROPONG M/A BASIC SCHOOL</div>
            <div>KYEAKOR NURUDEEN ISLAMIC BASIC SCHOOL</div>
            <div>AKOBIMA D/A BASIC SCHOOL</div>
          </td>
          <td>ABEADZE SHS</td>
          <td>28TH, 30TH JUNE, 2022</td>
          <td>9:00AM</td>
        </tr>
        
        <tr>
          <td>
            <div>ANOMABO CATHOLIC BASIC B SCHOOL</div>
            <div>ANOMABO CATHOLIC BASIC A</div>
            <div>AKRAMAN CATHOLIC BASIC SCHOOL</div>
            <div>BIRIWA METHODIST BASIC 'A'</div>
            <div>BIRIWA METHODIST BASIC C SCHOOL</div>
            <div>BIRIWA METHODIST BASIC B</div>
            <div>ANOMABO METHODIST BASIC 'A'</div>
            <div>BURANAMOA M/A BASIC SCHOOL</div>
            <div>NSANFO METHODIST BASIC SCHOOL</div>
            <div>ANOMABO METHODIST BASIC SCHOOL B</div>
            <div>ANOMABO ANGLICAN BASIC B</div>
            <div>EKURABADZE CATHOLIC BASIC SCHOOL</div>
            <div>TAIDO M/A BASIC</div>
            <div>ANOMABO ANGLICAN BASIC A</div>
            <div>EGYAA M/A BASIC SCHOOL</div>
            <div>DAADAAGUA M/A BASIC</div>
            <div>POMASE M/A BASIC SCHOOL</div>
            <div>NDASIMAM M/A BASIC</div>
            <div>OBUADZE BASIC SCHOOL</div>
            <div>MAMPONG M/A BASIC SCHOOL</div>
            
          </td>
          <td>ANOMABO ICT CENTRE</td>
          <td>1ST, 3RD  JULY, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>EDUMADZE M/A A2 BASIC</div>
            <div>MANKESSIM M/A 'A' BASIC SCHOOL</div>
            <div>EDUMADZE M/A PRIMARY/JHS 'A1'</div>
            <div>EDUMADZE M/A BASIC 'B'</div>
            <div>MANKESSIM M/A 'B' BASIC SCHOOL</div>
            <div>BAIFIKROM M/A BASIC 'A' SCHOOL</div>
            <div>DUADZE-OPEM M/A BASIC SCHOOL</div>
            <div>BAIFIKROM M/A BASIC 'B'</div>
            <div>AYISHA ISLAMIC BASIC - MANKESSIM</div>
            <div>ESHIRO M/A BASIC SCHOOL</div>
            <div>KROFU METHODIST BASIC SCHOOL</div>
            <div>MANKESSIM CATHOLIC A BASIC</div>
            <div>MANKESSIM ALL SOULS ANGLICAN BASIC B</div>
            <div>NKWANTA CATH. BASIC SCHOOL</div>
            <div>MANKESSIM ALL SOULS ANGLICAN BASIC A</div>
            <div>MANKESSIM METHODIST BASIC SCHOOL B</div>
            <div>MANKESSIM CATHOLIC BASIC SCHOOL 'B'</div>
            <div>EFUTUAKWA M/A KG/PRIMARY</div>
            <div>MANKESSIM METHODIST BASIC A</div>
            <div>MANKESSIM HAMEED ISLAMIC BASIC SCHOOL</div>
          </td>
          <td>MANKESSIM ICT CENTRE</td>
          <td>4TH - 5TH JULY, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td>
            <div>ABANDZE METHODIST BASIC 'A' </div>
            <div>REV. WILSON B. METHODIST BASIC SCHOOL-SALTPOND</div>
            <div>SALTPOND CATHOLIC GIRLS BASIC SCHOOL</div>
            <div>ABANDZE METHODIST 'B' BASIC SCHOOL</div>
            <div>SALTPOND LOWER TOWN M/A BASIC SCHOOL B</div>
            <div>KORMANTSE HASOWODZE M/A BASIC</div>
            <div>SALTPOND T.I AHMADIYYA BASIC</div>
            <div>SALTPOND BEACH ROAD M/A BASIC SCHOOL</div>
            <div>SALTPOND CATHOLIC BOYS BASIC</div>
            <div>KORMANTSE METHODIST BASIC SCHOOL</div>
            <div>KORMANTSE M/A BASIC</div>
            <div>OTSIR M/A BASIC SCHOOL</div>
            <div>SALTPOND LOWER TOWN M/A BASIC SCHOOL 'A'</div>
            <div>MFANTSIMAN M/A BASIC SCHOOL</div>
            <div>SALTPOND METHODIST BASIC A</div>
            <div>SALTPON S.S PETER & PAUL ANGLICAN BASIC</div>
            <div>AL-ZAKIYA ISLAMIC BASIC</div>
            <div>BISHOP LEMAIRE ANGLICAN BASIC, SALTPOND</div>
            <div>ABONKO METHODIST BASIC SCHOOL</div>
            <div>HINII M/A BASIC SCHOOLS</div>
            <div>KUNTU METHODIST BASIC</div>
            <div>SALTPOND A.M.E ZION BASIC SCHOOL</div>
          </td>
          <td>LOWER TOWN ICT CENTRE</td>
          <td>6TH - 8TH JULY, 2022</td>
          <td>9:00AM</td>
        </tr>
        <tr>
          <td rowSpan={5}>38</td>
          <td rowSpan={5}>TWIFO HEMANG LOWER DENKYIRA</td>
          <td>JUKWA SHTS</td>
          <td>JUKWA SHTS ICT LAB</td>
          <td>MONDAY, 20TH JUNE, 2022</td>
          <td rowSpan={5}>9:00AM</td>
        </tr>
        <tr>
          <td>HEMANG EAST  AND WEST CIRCUITS (A)</td>
          <td>TWIFO HEMANG SHTS ICT LAB</td>
          <td>TUESDAY, 21ST JUNE, 2022</td>
        </tr>
        <tr>
          <td>HEMANG EAST AND WEST CIRCUITS (B)</td>
          <td>ASSEMBLIES OF GOD CHAPEL</td>
          <td>WEDNESDAY, 22ND JUNE, 2022</td>
        </tr>
        <tr>
          <td>WAWASE AND MFUOM CIRCUITS</td>
          <td>PRESBY CHAPEL, WAWASE</td>
          <td>THURSDAY,23RD JUNE, 2022</td>
        </tr>
        <tr>
          <td>JUKWA NORHT AND SOUTH CIRCUITS</td>
          <td>JUKWA METHODIST BASIC</td>
          <td>TUESDAY, 28TH JUNE, 2022</td>
        </tr>
        <tr>
          <td rowSpan={5}>39</td>
          <td rowSpan={5}>TWIFO ATTI MORKWA</td>
          <td>TWIFO PRASO SHS, MORKWA SHS</td>
          <td>TWIFO PRASO SNR HIGH ASSEMBLY HALL</td>
          <td> 20TH-22ND JUNE, 2022</td>
          <td rowSpan={5}>2HRS 30MINS</td>
        </tr>
        <tr>
          <td>PRASO AND AGONA CIRCUITS</td>
          <td rowSpan={4}>LIGHT HOUSE CHAPEL, TWIFO PRASO</td>
          <td> 23RD-25TH JUNE, 2022</td>
        </tr>
        <tr>
          <td>NYINASE, MORKWA, AND JUABENG CIRCUITS</td>
          <td> 27TH-29TH JUNE, 2022</td>
        </tr>
        <tr>
          <td> MAMPONG, NUAMAKROM,BIMPONG EGYA CIRCUITS</td>
          <td> 30TH JUNE -2ND JULY, 2022</td>
        </tr>
        <tr>
          <td>HASOWODZE AND WAMASO CIRCUITS</td>
          <td> 4TH - 6TH JULY, 2022</td>
        </tr>
        <tr>
          <td rowSpan={6}>40</td>
          <td rowSpan={6}>UPPER DENKYIRA EAST MUNICIPAL</td>
          <td>BOA AMPONSEM SENIOR HIGH SCHOOL</td>
          <td>BOA AMPONSEM SENIOR HIGH SCHOOL</td>
          <td>16TH JUNE & 17TH JUNE 2022</td>
          <td>9AM - 11:30AM</td>
        </tr>
        <tr>
          <td>DUNKWA SENIOR HIGH TECHNICAL SCHOOL</td>
          <td>DUNKWA SENIOR HIGH TECHNICAL SCHOOL</td>
          <td>16TH JUNE & 17TH JUNE 2022</td>
          <td>12.30 - 3.00 PM</td>
        </tr>
        <tr>
          <td>
            <div>AKYENEKROM M/A BASIC SCHOOL</div>
            <div>AMOAFO M/A BASIC SCHOOL</div>
            <div>ASMAHKROM M/A BASIC SCHOOL</div>
            <div>BADOA M/A BASIC SCHOOL</div>
            <div>DENKYIRA FOSU JHS</div>
            <div>ZION CAMP M/A BASIC SCHOOL</div>
            <div>ZION NO. 1 M/A BASIC SCHOOL</div>
            <div>ZION NO. 2 M/A BASIC SCHOOL</div>
            <div>ADWUMAM M/A BASIC SCHOOL</div>
            <div>AMAKYE ANSAH M/A BASIC SCHOOL</div>
            <div>BUABIN CAMP M/A BASIC SCHOOL</div>
            <div>KUMAKROM M/A BASIC SCHOOL</div>
            <div>KYEKYEWERE AFRICAN FAITH M/A BASIC SCHOOL</div>
            <div>KYEKYEWERE M/A BASIC</div>
            <div> KYEKYEWERE M/A JHS 'B'</div>
            <div>KYEKYEWERE METHODIST BASIC SCHOOL</div>
            <div>PRAPRABABIDA M/A BASIC</div>
            <div>KYEKYEWERE SENIOR HIGH SCHOOL</div>
            <div>ABUDUKROM M/A BASIC SCHOOL</div>
            <div>IMBRAIM M/A BASIC SCHOOL</div>
            <div>KONA NO. 2 M/A BASIC SCHOOL</div>
            <div>KRAMOKROM M/A BASIC SCHOOL</div>
            <div>KWAKUDUM M/A BASIC SCHOOL</div>
            <div>AJIMPOMA YAA DARKWA M/A BASIC SCHOOL</div>
            <div>ATOBIASE M/A BASIC SCHOOL</div>
            <div>FAWOMANYO M/A BASIC SCHOOL</div>
            <div>OPONSO CATHOLIC BASIC SCHOOL</div>
            <div>POKUKROM NO. 2 BASIC SCHOOL</div>
            <div>TEGYAMOSO M/A BASIC</div>
            <div>TWIFO KYEBI M/A BASIC</div>
            <div>CHURCH OF CHRIST M/A JHS</div>
            <div>METHODIST JHS</div>
            <div>PRESBY JHS</div>
            <div>MFUOM M/A JHS</div>
            <div>NEW BABIANEHA M/A BASIC SCHOOL</div>
            
          </td>
          <td>KYEKYEWERE SHS</td>
          <td>20TH JUNE & 21ST JUNE 2022</td>
          <td>9.00 AM - 11.30 AM</td>
        </tr>
        <tr>
          <td>
            <div>ADJOM M/A BASIC SCHOOL</div>
            <div>BUABIN M/A BASIC SCHOOL</div>
            <div>BUABIN METHODIST BASIC SCHOOL</div>
            <div>SOBROSO M/A BASIC SCHOOL</div>
            <div>AMISSAKROM M/A BASIC SCHOOL</div>
            <div>KYEREMFEM M/A BASIC SCHOOL</div>
            <div>SDA JHS</div>
            <div>KOFI ASHIA M/A JHS</div>
            <div>KWAMEPRAKROM M/A BASIC SCHOOL</div>
            <div>ANSARU-L-DEEN M/A BASIC SCHOOL</div>
            <div>BUABINSO M/A JHS</div>
            <div>DUNKWA ABUAKWA NKWANTA M/A BASIC</div>
            <div>ANGLICAN BASIC SCHOOL</div>
            <div>T.I. AHMADIYYA BASIC SCHOOL</div>
            <div>MBRADAN M/A BASIC SCHOOL</div>
          </td>
          <td rowSpan={2}>DUNKWA CHURCH OF CHRIST CHURCH AUDITORIUM</td>
          <td>23RD JUNE.2022</td>
          <td>12.30 - 3:00 PM</td>
        </tr>
        <tr>
          <td>
            <div>ADJOM M/A BASIC SCHOOL</div>
            <div>BUABIN M/A BASIC SCHOOL</div>
            <div>BUABIN METHODIST BASIC SCHOOL  </div>
            <div>SOBROSO M/A BASIC SCHOOL</div>
            <div>AMISSAKROM M/A BASIC SCHOOL</div>
            <div>KYEREMFEM M/A BASIC SCHOOL</div>
            <div>SDA JHS</div>
            <div>KOFI ASHIA M/A JHS</div>
            <div>KWAMEPRAKROM M/A BASIC SCHOOL</div>
            <div>ANSARU-L-DEEN M/A BASIC SCHOOL</div>
            <div>BUABINSO M/A JHS</div>
            <div>DUNKWA ABUAKWA NKWANTA M/A BASIC</div>
            <div>ANGLICAN BASIC SCHOOL</div>
            <div>T.I. AHMADIYYA BASIC SCHOOL</div>
            <div>MBRADAN M/A BASIC SCHOOL</div>
          </td>
          <td>24TH JUNE,2022</td>
          <td rowSpan={2}>9.00 AM - 11.30 AM</td>
        </tr>
        <tr>
          <td>
            <div>ACHIASE M/A BASIC SCHOOL</div>
            <div>ASIKUMA M/A BASIC SCHOOL</div>
            <div>ASIKUMA R/C BASIC SCHOOL</div>
            <div>ESAASE M/A JHS</div>
            <div>MERETWESO M/A BASIC SCHOOL</div>
            <div>BOA AMPONSEM JHS</div>
            <div>DUNKWA ABESCO BASIC SCHOOL</div>
            <div>CATHOLIC BOYS' JHS</div>
            <div>CATHOLIC GIRLS'' JHS</div>
            <div>DUNKWA GOLDFIELDS JHS</div>
            <div>MFANTSIMAN M/A BASIC</div>
            <div>POKUKROM NO. 1 M/A BASIC SCHOOL</div>
          </td>
          <td>DUNKWA CHURCH OF CHRIST CHURCH AUDITORIUM</td>
          <td>27TH JUNE & 28TH JUNE 2022</td>
        </tr>
        <tr>
          <td rowSpan={9}>41</td>
          <td rowSpan={9}>UPPER DENKYIRA WEST</td>
          <td>AYANFURI SHS </td>
          <td rowSpan={3}>AYANFURI BASIC SCHOOL</td>
          <td rowSpan={3}>27-28TH JUNE, 2022</td>
          <td>9-11:30</td>
        </tr>
        <tr>
          <td>AYANFURI CIRCUIT</td>
          <td>12-2:30</td>
        </tr>
        <tr>
          <td>DOMENASE CIRCUIT</td>
          <td>9-11:30</td>
        </tr>
        <tr>
          <td>DIASO SHS</td>
          <td rowSpan={3}>DIASO ANGLICAN BASIC SCHOOL</td>
          <td rowSpan={3}>15-16TH JUNE, 2022</td>
          <td>9-11:30</td>
        </tr>
        <tr>
          <td>NEW OBUASI CIRCUIT</td>
          <td>9-11:30</td>
        </tr>
        <tr>
          <td>DIASO CIRCUIT</td>
          <td>12-2:30</td>
        </tr>
        <tr>
          <td>NTOM CIRCUIT</td>
          <td>NTOM DA BASIC SCHOOL</td>
          <td rowSpan={2}>29-30TH JUNE, 2022</td>
          <td>9-11:30</td>
        </tr>
        <tr>
          <td>SUBIN HILL CIRCUIT </td>
          <td>SUBIN HILL ANG BASIC SCHOOL</td>
          <td>12-2:30</td>
        </tr>
        <tr>
          <td>TREPOSO  CIRCUIT</td>
          <td>TREPOSO DA BASIC SCHOOL</td>
          <td>1 & 4TH JULY, 2022</td>
          <td>10.00 AM</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CentralTable;
