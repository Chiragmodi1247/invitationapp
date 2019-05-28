import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state] = React.useState({
    columns: [
      { title: "index", field: "index" },
      { title: "Start", field: "sDate" },
      { title: "End", field: "eDate", type: "date" },
      { title: "Event", field: "event" },
      { title: "Venue", field: "venue" }
    ],
    data: [
      {
        index: "1",
        sDate: "15/05/2019",
        eDate: "18/05/2019",
        event: "Wedding at Sharma's house",
        venue: "Ahmedabad"
      },
      {
        index: "2",
        sDate: "21/05/2019",
        eDate: "22/05/2019",
        event: "Mahendi at Sharma's house",
        venue: "Gandhinagar"
      }
    ]
  });

  return <MaterialTable title="" columns={state.columns} data={state.data} />;
}
