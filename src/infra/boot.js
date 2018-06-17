"use strict";

module.exports = app => {
  const PORT = app.get("port");
  app.listen(PORT, () => {
    console.log(`Servidor subindo na porta: ${PORT}`);
  });
};
