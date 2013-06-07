getJasmineRequireObj().toHaveBeenCalled = function() {

  function toHaveBeenCalled() {
    return {
      compare: function(actual) {
        var result = {};

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (arguments.length > 1) {
          throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');
        }

        result.pass = actual.wasCalled;

        result.message = result.pass ?
          "Expected spy " + actual.identity + " not to have been called." :
          "Expected spy " + actual.identity + " to have been called.";

        return result;
      }
    };
  }

  return toHaveBeenCalled;
};
