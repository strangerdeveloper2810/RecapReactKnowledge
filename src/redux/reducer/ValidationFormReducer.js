const initialState = {
  userList: [
    {
      id: 1,
      account: "demo",
      fullName: "Nguyễn Văn A",
      password: "demo1234T",
      email: "demo@yahoo.com",
      phone: "090934355",
      typeOfUser: "Khách Hàng"
    },
  ],

  userEdit: [
    {
      id: 1,
      account: "demo",
      fullName: "Nguyễn Văn A",
      password: "demo1234T",
      email: "demo@yahoo.com",
      phone: "090934355",
      typeOfUser: "Khách Hàng"
    },
  ],

  typeOfUser: [
    { id: 1, name: "Khách Hàng" },
    { id: 2, name: "Quản Trị" },
  ],
};

const ValidationFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ValidationFormReducer;
