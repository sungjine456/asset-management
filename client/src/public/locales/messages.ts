const Messages: { [key: string]: any } = {
  SUC: "성공했습니다.",
  FAIL: "실패했습니다.",

  STOCK_DUP: "존재하는 종목코드입니다.",
  COMMON_CODE_DUP: "존재하는 공통코드입니다.",

  FAIL_UPDATE_HAS_CHILDREN:
    "하위 코드가 있는 상위 코드는 상위 코드를 가질 수 없습니다.",
  FAIL_UPDATE_SELF_INHERITANCE: "자기 자신을 상위 코드로 가질 수 없습니다.",

  FAIL_DEL_NOT_EMPTY_CHILDREN_CODE: "하위 코드를 삭제한 후 삭제가 가능합니다.",
};

export default Messages;
