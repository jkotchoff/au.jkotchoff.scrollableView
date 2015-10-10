var args               = arguments[0] || {},
    disabledDotOpacity = 0.4,
    pagingControlBg    = args['pagingControlBackgroundColor'] || '#f1f1f1',
    pagingControlDot = args['pagingControlDotImage'] || WPATH('images/paging_control_dot.png');

// Style the paging control
$.pagingControl.setBackgroundColor(pagingControlBg);

// Exports setViews
exports.setViews = setScrollableViewViews;
function setScrollableViewViews(_views) {
  if(_views) {
    $.scrollableView.setViews(_views);
    args.children = _views;
    initializePagingControl();  
  }
};

// Set the view parameters as children of the ScrollableView
setScrollableViewViews(args.children);

// Highlight the selected view
exports.setCurrentPage = setScrollableViewCurrentPage;
function setScrollableViewCurrentPage(currentIndex) {
  _.each($.pagingControlButtons.children, function(pagingDot, index){
    pagingDot.opacity = (index == currentIndex) ? 1 : disabledDotOpacity;
  });
};

// Initialize the dots in the faux paging control
function initializePagingControl() {
  if(args.children) {
    _(args.children.length).times(function(n){
      $.pagingControlButtons.add(Ti.UI.createImageView({
        image: pagingControlDot, 
        width: '16dp',
        height: '16dp'
      }));
    });

    // Initialize the first view
    setScrollableViewCurrentPage(0);
  }
}

// Handle scroll events
$.scrollableView.addEventListener('scrollEnd', function(e){
  if(e == null || e.source == null || e.source.currentPage == null) return;
  exports.setCurrentPage(e.source.currentPage);
});

//Apply any widget arguments. If height is provided, adjust for the paging control.
delete args.children;
if(args.height && args.height.indexOf("%") == -1){
  args.height = (parseInt(args.height) - parseInt($.pagingControl.height)) + "dp";
}
_.extend($.getView(), args);

// Use the view from this widget in the calling container
__parentSymbol.add($.getView());

// Overwrite Backbone methods, as used in the generated code by Alloy:
// doClick ? $.__views.myWidget.on("click", doClick) : __defers["$.__views.myWidget!click!doClick"] = !0;
exports.on = function(name, cb) { return $.scrollableView.addEventListener(name, cb); };
exports.off = function(name, cb) { return $.scrollableView.removeEventListener(name, cb); };
exports._hasListenersForEventType = function(name, flag) {
    return $.scrollableView._hasListenersForEventType(name, flag);
};

// Support Titanium methods
exports.addEventListener = function(name, cb) { return $.scrollableView.addEventListener(name, cb); }
exports.removeEventListener = function(name, cb) { return $.scrollableView.removeEventListener(name, cb); };

// support next & previous "slide" from code
exports.moveNext = $.scrollableView.moveNext;
exports.movePrevious = $.scrollableView.movePrevious;

// Overwrite backbone aliasses:
exports.bind = $.scrollableView.addEventListener;
exports.unbind = $.scrollableView.removeEventListener;
 
// Overwrite Backbone trigger and Titanium fireEvent methods for convenience
exports.trigger = $.scrollableView.fireEvent;
exports.fireEvent = $.scrollableView.fireEvent;
