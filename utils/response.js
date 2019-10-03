function response(message) {
  return {
    status: 200,
    message: message || "",
    error: false,
    data: [],
    setdata: function(data) {
      this.data = data;

      return this;
    },
    iserror: function(status, data = null) {
      this.error = true;
      this.status = status;
      this.data = data;

      return this;
    }
  };
}

module.exports = response;
