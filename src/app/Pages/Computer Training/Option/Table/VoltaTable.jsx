import React from 'react'
import { Table } from 'reactstrap'

function VoltaTable() {
  return (
    <Table  bordered  responsive className="container ">
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
            <td rowSpan={10}>1</td>
            <td rowSpan={10}>SOUTH DAYI DISTRICT</td>
            <td>KPEVE  SHTS(STAND ALONE)</td>
            <td>KPEVE  SHTS (ASSEMBLY HALL)</td>
            <td>WEDNESDAY, 6TH JULY, 2022</td>
            <td rowSpan={10}>9.00 AM</td>
          </tr>
          <tr>
            <td>PEKI SHS</td>
            <td>PEKI SHS (ASSEMBLY HALL)</td>
            <td>WEDNESDAY,13TH JULY ,2022</td>
          </tr>
          <tr>
            <td>PEKI SHTS</td>
            <td>PEKI SHS (ASSEMBLY HALL)</td>
            <td>TUESDAY ,12TH JULY,2022</td>
          </tr>
          <tr>
            <td>TONGOR SHTS(STAND ALONE)</td>
            <td>TONGOR SHTS (ASSEMBLY HALL)</td>
            <td>TUESDAY ,19TH JULY,2022</td>
          </tr>
          <tr>
            <td>TSANAKPE   CIRCUIT SCHOOLS</td>
            <td rowSpan={2}>TONGOR SHTS (ASSEMBLY HALL)</td>
            <td rowSpan={2}>TUESDAY ,5TH JULY ,2022</td>
          </tr>
          <tr>
            <td>TOH CIRCUIT SCHOOLS</td>
          </tr>
          <tr>
            <td>KPEVE  CIRCUIT SCHOOLS</td>
            <td>KPEVE E.P CHAPEL</td>
            <td>THURSDAY ,7TH JULY ,2022</td>
          </tr>
          <tr>
            <td>PEKI CENTRAL CIRCUIT SCHOOLS</td>
            <td rowSpan={3}>PEKI WUDOME E.P CHAPEL</td>
            <td rowSpan={3}>FRIDAY, 8TH JULY,2022</td>
          </tr>
          <tr>
            <td>PEKI SOUTH CIRCUIT SCHOOLS</td>
          </tr>
          <tr>
            <td>PEKI NORTH CIRCUIT SCHOOLS</td>
          </tr>

          <tr>
            <td rowSpan={2}>2</td>
            <td rowSpan={2}>AGOTIME ZIOPE</td>
            <td>
              <div>AGOTIME SENIOR HIGH SCHOOL</div>
              <div>ADEDOME E/P BASIC SCHOOL</div>
              <div>AGOHOKPO R/C BASIC SCHOOL</div>
              <div>AGOTIME AFEGAME D/A J.H.S</div>
              <div>AGOTIME AGBESIA D/A BASIC SCH</div>
              <div>AGOTIME BEH METHODIST BASIC SCH</div>
              <div>AGOTIME KPETOE E.P. J.H.S</div>
              <div>AKUETTEH D/A BASIC SCHOOL</div>
              <div>OBEMLA D/A BASIC SCH</div>
              <div>AGOTIME KPETOE ANGLICAN BASIC SCHOOL </div>
              <div>KPETOE CEPS D/A BASIC SCHOOL</div>
              <div>KPETOE R.C. J.H.S</div>
              <div>KPETOE S.D.A BASIC SCHOOL</div>
              <div>MANGOASE D/A BASIC</div>
              <div>SARAKOPE D/A BASIC SCH</div>
             
            </td>
            <td>AGOTIME SENIOR HIGH SCHOOL</td>
            <td>21ST JULY</td>
            <td>07.00 AM</td>
          </tr>
          <tr>
            <td>
            <div>WODOME S/A BASIC SCHOOL</div>
              <div>ZIOPE SENIOR HIGH SCHOOL</div>
              <div>ABORDAHE AX D/A BASIC SCHOOL</div>
              <div>ADZONKOR D/A J.H.S</div>
              <div>AKPOKOPE D/A J.H.S</div>
              <div>ATSRULUME D/A BASIC SCH</div>
              <div>BATUME JUNCTION R/C BASIC SCHOOL</div>
              <div>DZREMAVE D/A BASIC SCH</div>
              <div>HONUGO D/A BASIC SCHOOL</div>
              <div>KPORTA S/A BASIC SCHOOL</div>
              <div>TAKUVE D/A BASIC SCHOOL</div>
              <div>WUDZEDEKE D/A BASIC SCH</div>
              <div>YEVI D/A BASIC SCHOOL</div>
              <div>ZIOPE D/A J.H.S</div>
              <div>KORTSRALA D/A BASIC SCH</div>
             
            </td>
            <td>ZIOPE SENIOR HIGH SCHOOL</td>
            <td>22ND JULY</td>
            <td>07.00 AM</td>
          </tr>
          <tr>
            <td rowSpan={6}>3</td>
            <td rowSpan={6}>HOHOE</td>
            <td>
              <div>ALAVANYO SECONDARY/TECHNICAL SCHOOL</div>
              <div>ALAVANYO E.P TECHNICAL VOCATIONAL INST.</div>
              <div>AFADJATO SECONDARY/TECHNICAL SCHOOL</div>
              <div>ALAVANYO AGOXOE/ABEHENEASE M/A KG/PRIM./ J.H.S SCHOOL</div>
              <div>ALAVANYO KPEME UNITED R/C J.H.S SCHOOL</div>
              <div>ALAVANYO WUDIDI M/A J.H.S 'A&B'</div>
              <div>ALAVANYO- WUDIDI ST. MARY'S R/C KG/PRIM/JHS SCHOOL</div>
              <div>ALAVANYO-AGOME E/P KG/PRIMARY/ & D/A J.H.S SCHOOL</div>
              <div>ALAVANYO DZOGBEDZE/DEME M/A JHS SCHOOL</div>
              <div>FODOME HLOMA E/P KG/PRIM/JHS BASIC SCHOOL</div>
              <div>FODOME KODZETO M/A KG/PRIMARY/JHS</div>
              <div>FODOME WOE/AGBETSIDO M/A KG/PRIMARY/JHS SCHOOL</div>
              <div>FODOME-DZOGBEGA M/A KG/PRIMARY/`JHS</div>
              <div>FODOME-AMELE/AXOR M/A J.H.S</div>
              <div>FODOME HELU R/C J.H.S</div>
              <div>WLI-TDOZI M/A J.H.S</div>
              <div>WLI CENTRAL M/A J.H.S</div>
              <div>GBLEDI CHEBI M/A J.H.S</div>
              <div>GBLEDI GBOGAME M/A J.H.S</div>
              <div>HOHOE E/P SENIOR HIGH SCHOOL</div>
            </td>
            <td>GES CONFERENCE HALL</td>
            <td>13TH JULY, 2022</td>
            <td>8:30AM - 3:30PM</td>
          </tr>
          <tr>
            <td>
              <div>GBI-WEGBE E/P BASIC 'B'</div>
              <div>GBI-WEGBE E/P BASIC 'A'</div>
              <div>GBI ATABU R/C BASIC SCHOOL</div>
              <div>GBI GODENU M/A BASIC SCHOOL</div>
              <div>GBI KLEDZO M/A J.H.S</div>
              <div>GBI KPOETA M/A BASIC SCHOOL</div>
              <div>GBI-AKPLAMAFU M.A BASIC SCHOOL</div>
              <div>HOHOE BETHEL METHODIST J.H.S</div>
              <div>HOHOE M/A EXPERIMENTAL JHS SCHOOL</div>
              <div>HOHOE MUSAMA M/A BASIC SCHOOL</div>
              <div>HOHOE NEW TOWN M/A KG/PRIMARY/JHS SCHOOL</div>
              <div>HOHOE PRESBYTERIAN BASIC SCHOOL</div>
              <div>HOHOE VOLTA SCHOOL FOR THE DEAF BASIC SCHOOLvol</div>
              <div>AHLUSUNNA WAL JAMA'A ENG. & ARABIC BASIC SCHOOL, HOHOE</div>
              <div>HOHOE A.M.E ZION J.H.S</div>
              <div>HOHOE E.P BASIC SCHOOL 'A'</div>
              <div>HOHOE HOLY ROSARY R/C J.H.S</div>
              <div>HOHOE E/P BASIC SCHOOL 'C'</div>
              <div>HOHOE E/P BASIC SCHOOL 'B'</div>
              <div>HOHOE S.D.A J.H.S</div>
              <div>HOHOE ADABRAKA ENG/ARABIC PRIMARY AND M/A J.H.S</div>
              <div>GBI-CENTRAL R/C BOY'S J.H.S ,HOHOE</div>
              <div>GBI-KODZOFE M/A BASIC, HOHOE</div>
              <div>GBI-KPEME M/A JHS, HOHOE</div>
              <div>ST. FRANCIS DEMONSTRATION J.H.S. 'A' , HOHOE</div>
              <div>ST. TERESA'S GIRLS DEMONSTRATION J.H.S, HOHOE</div>
              <div>ST FRANCIS DEMONSTRATION JHS B.</div>
            </td>
            <td>GES CONFERENCE HALL</td>
            <td>14TH JULY, 2022</td>
            <td>8:30AM - 4:00PM</td>
          </tr>
          <tr>
            <td>
              <div>DZODZE PENYI SHS</div>
              <div>AKPATOEME BASIC SCHOOL</div>
              <div>BAGOME BROTHERHOOD M A BASIC SCHOOL A & B</div>
              <div>DEME M A BASIC</div>
              <div>DZODZE ABLORME JHS</div>
              <div>DZODZE CENTRAL JHS</div>
              <div>DZODZE FIAGBEDU R  C   M A  BASIC A SCHOOL</div>
              <div>DZODZE MITE BASIC</div>
              <div>PENYI ANGLICAN JHS</div>
              <div>PENYI NO 2 JHS</div>
              <div>PENYIPEDO TAMEKOPE</div>
              <div>TORKPO  ZOMAYI</div>
              <div>TORNU R C BASIC</div>
              <div>TOVE ST  MARY ANGLICAN SCHOOL</div>
              <div>ZUKPE M A BASIC</div>
              <div>KASU BASIC</div>
              <div>KAVE M A JHS</div>
              <div>KPELIKOPE</div>
              <div>KULI DZOGBEFIME JHS</div>
            </td>
            <td>DZODZE PENYI SENIOR HIGH SCHOOL</td>
            <td>11TH - 13TH JULY, 2022</td>
            <td>8:00 TO 10:30 DAILLY</td>
          </tr>
          <tr>
            <td>
              <div>WOVENU SHTS</div>
              <div>AGORVIE M A BASIC SCHOOL</div>
              <div>DEKPOR BASIC A & B</div>
              <div>DEME M A BASIC</div>
              <div>DEVEGO M A BASIC SCHOOL</div>
              <div>HEHEME CENTRAL MA BASIC SCHOOL</div>
              <div>TADZEWU MA ARS JHS</div>
              <div>TADZEWU R C BASIC</div>
              <div>WUTI M A  BASIC SCHOOL</div>
              <div>XIPE M A BASIC SCHOOL</div>
              <div>ATIVE M A</div>
              <div>KUTSINU M A  BASIC</div>
            </td>
            <td>WOVENU SENIOR HIGH TECHNICAL SCHOOL</td>
            <td>11TH - 13TH JULY, 2022</td>
            <td>12:00 - 2:30 DAILLY</td>
          </tr>
          <tr>
            <td>
              <div>AFIFE SHTS</div>
              <div>ADEVUKOPE M A BASIC</div>
              <div>AFIFE ANYIEHE JHS</div>
              <div>AFIFE DZIEHE JHS</div>
              <div>AFORNYAGA EWU M A BASIC SCHOOL</div>
              <div>AGORVEGA ATIKPE ANG</div>
              <div>ATITETI MA BASIC</div>
              <div>AVALAVI M A JHS</div>
              <div>ELEME SOVI M A BASIC</div>
              <div>GAGODOPE   LAVE M A  BASIC SCHOOL</div>
              <div>KLENORMADI M A BASIC</div>
              <div>KPORKUVE M A JHS</div>
              <div>NEW AVALAVI M A BASIC</div>
              <div>TSIYINU M A BASIC</div>
            </td>
            <td>AFIFE EP SCHOOL</td>
            <td>18TH - 20TH JULY, 2022</td>
            <td>8:00 - 10:30 DAILLY</td>
          </tr>
          <tr>
            <td>
              <div>WETA SHTS</div>
              <div>ADRUME MA JHS</div>
              <div>ADZINUKOPE M A BASIC</div>
              <div>ADZORTI M A JHS</div>
              <div>EHI EP A B BASIC</div>
              <div>EHI HORME ANG  BASIC</div>
              <div>EHI M A BASIC</div>
              <div>EHI KALEDZI E P BASIC SCHOOL</div>
              <div>GBEGBEKOPE R C BASIC</div>
              <div>HUIVE MA BASIC SCHOOL</div>
              <div>TADZI  M E  ZION BASIC SCHOOL</div>
              <div>WETA ST  MICHEAL R C BASIC</div>
            </td>
            <td>WETA SENIOR HIGH TECHNICAL SCHOOL</td>
            <td>18TH - 20TH JULY, 2022</td>
            <td>12:00 - 2:30 DAILLY</td>
          </tr>
        </tbody>
      </Table>
  )
}

export default VoltaTable