exports.columns = [
  {
    title: "Ckbox",
    type: "selection",
    width: 60,
    align: "center",
  },
  {
    title: "Id",
    slot: "id",
  },
  {
    title: "Site",
    slot: "siteId",
    format: {
      type: "enum",
      pattern: "Site",
    },
  },
  {
    title: "Ip",
    slot: "ip",
  },
  {
    title: "DelayTimeoutTime",
    slot: "delayTimeoutTime",
    format: {
      type: "date",
    },
  },

  {
    title: "Operation",
    slot: "test",
    isOperation: true,
    operations: [
      {
        name: "delete",
        label: "Delete",
        match: (row) => true,
      },
    ],
  },
]