//  Immediately Invoked  Function  Expressions (IIFE)
// () ();
// used for creating IIFE to prevent polluting global scope , because we don't want to pollute global scope

(function chai() {
  // named IIFE
  console.log("DB connected");
})();

((name) => {
  console.log(`DB2 connected ${name}`);
})("Ravi Karmakar");
