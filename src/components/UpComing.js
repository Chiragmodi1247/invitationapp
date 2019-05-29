import React from "react";
import MaterialTable from "material-table";

class UpComing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null
    };
  }

  render() {
    return (
      <MaterialTable
        title=""
        columns={[
          { title: "index", field: "index" },
          { title: "Start", field: "sDate" },
          { title: "End", field: "eDate", type: "date" },
          { title: "Event", field: "event" },
          { title: "Venue", field: "venue" }
        ]}
        data={[
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
        ]}
        onRowClick={(evt, selectedRow) => this.setState({ selectedRow })}
        options={{
          rowStyle: rowData => ({
            backgroundColor:
              this.state.selectedRow &&
              this.state.selectedRow.tableData.id === rowData.tableData.id
                ? "#EEE"
                : "#FFF"
          })
        }}
      />
    );
  }
}
export default UpComing;
