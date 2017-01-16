function load_map() {
  var map = new Datamap({

        scope: 'world',
         element: document.getElementById('container'),

        projection: 'mercator',
        height: 600,
        width: 700,
        fills: {
          havebeen: 'red',
          wanttogo: 'yellow',
          havelived: 'orange'
        },

        
        data: {
          CHN: {fillKey: 'havelived' },     // China
          HKG: {fillKey: 'havebeen' },     // HK
          MAC: {fillKey: 'havebeen' },     // Macao
          USA: {fillKey: 'havelived' },     // USA
          KOR: {fillKey: 'wanttogo' },  // Korea
          SGP: {fillKey: 'wanttogo' },  // Singapore
          IND: {fillKey: 'wanttogo' },  // India
          CAN: {fillKey: 'havebeen' },  // Canada
          AUS: {fillKey: 'wanttogo' },  // Austraila
          NZL: {fillKey: 'wanttogo' },  // New Zealand
          JPN: {fillKey: 'havebeen' },     // Japan
          AUT: {fillKey: 'havebeen' },     // Austria
          BEL: {fillKey: 'havebeen' },     // Belgium
          CHE: {fillKey: 'havebeen' },     // Switzerland
          DEU: {fillKey: 'havebeen' },     // Germany
          DNK: {fillKey: 'havebeen' },     // Denmark
          ITA: {fillKey: 'havebeen' },     // Italy
          SPN: {fillKey: 'wanttogo' },  // Spain
          GRC: {fillKey: 'wanttogo' },  // Greece
          FRA: {fillKey: 'havebeen' },     // France
          NLD: {fillKey: 'havebeen' },     // Netherlands
          NOR: {fillKey: 'havebeen' },     // Norway
          SWE: {fillKey: 'havebeen' },     // Sweden
          FIN: {fillKey: 'havebeen' },     // Finnland
          ISL: {fillKey: 'havebeen' },     // Iceland
          GBR: {fillKey: 'wanttogo' },  // UK
          BRA: {fillKey: 'wanttogo' },  // Brazil
          CRI: {fillKey: 'wanttogo' },  // Costa Rica
          PRI: {fillKey: 'wanttogo' },  // Puerto Reco
          ZAF: {fillKey: 'wanttogo' },  // South Africa
          QAT: {fillKey: 'havebeen' },     // Qatar
        }
      });
}