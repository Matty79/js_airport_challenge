describe('Plane',function(){'use strict';
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined();
  });
});
