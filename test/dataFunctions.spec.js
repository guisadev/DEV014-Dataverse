import { filterData } from "../src/dataFunctions.js";
import { data  } from './data.js';
import { origenItalia, moliendaFina } from "./data.js";
import { sortData } from "../src/dataFunctions.js";
//console.log(fakeData);

describe("filterData", () => {
  it("returns filtrado por origen Italia", () => {
    const italiaResult = filterData(data, "origen", "Italia");
    expect(italiaResult).toEqual(origenItalia);
  });

  it("returns filtrado por tipo de molienda", () => {
    const moliendaResult = filterData(data, "molienda", "fina");
    expect(moliendaResult).toEqual(moliendaFina);
  });
});

describe("sortData function", () => {


  test("sorts data in ascending order by default", () => {

    const sortedData = sortData(data, "name", "asc");
    const expectedSortedData = [
      {
        id: "Cappu",
        name: "Cappuccino o cortado",
        facts: {
          origen: "Italia",
          molienda: "",
        },
      },
      {
        id: "cafe-espresso",
        name: "Espresso",
        facts: {
          origen: "Italia, Milán",
          molienda: "",
        },
      },
      {
        id: "Mocca",
        name: "Mocaccino",
        facts: {
          origen: "Italia",
          molienda: "fina",
        },
      },
    ];
    expect(sortedData).toEqual(expectedSortedData);
  });

  test("sorts data in desc order by default", () => {


    const sortedData = sortData(data, "name", "desc");
    const expectedSortedData = [
      {
        id: "Mocca",
        name: "Mocaccino",
        facts: {
          origen: "Italia",
          molienda: "fina",
        },
      },
      {
        id: "cafe-espresso",
        name: "Espresso",
        facts: {
          origen: "Italia, Milán",
          molienda: "",
        },
      },
      {
        id: "Cappu",
        name: "Cappuccino o cortado",
        facts: {
          origen: "Italia",
          molienda: "",
        },
      },
    ];
    expect(sortedData).toEqual(expectedSortedData);
  });
});

