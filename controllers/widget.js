var args               = arguments[0] || {},
    disabledDotOpacity = 0.4,
    pagingControlBg    = args['pagingControlBackgroundColor'] || '#f1f1f1';

// Style the paging control
$.pagingControl.setBackgroundColor(pagingControlBg);

// Set the view parameters as children of the ScrollableView
$.scrollableView.setViews(args.children);

// Initialise the dots in the faux paging control
_(args.children.length).times(function(n){
  $.pagingControlButtons.add(Ti.UI.createImageView({
    image: WPATH('images/paging_control_dot.png'), 
    width: '16dp',
    height: '16dp'
  }));
});

// Highlight the selected view
exports.setCurrentPage = function setScrollableViewCurrentPage(currentIndex) {
  _.each($.pagingControlButtons.children, function(pagingDot, index){
    pagingDot.opacity = (index == currentIndex) ? 1 : disabledDotOpacity;
  });
};

// Handle scroll events
$.scrollableView.addEventListener('scrollEnd', function(e){
  if(e == null || e.source == null || e.source.currentPage == null) return;
  exports.setCurrentPage(e.source.currentPage);
});

// Initialize the first view
exports.setCurrentPage(0);

//Apply any widget arguments. If height is provided, adjust for the paging control.
delete args.children;
if(args.height && args.height.indexOf("%") == -1){
  args.height = (parseInt(args.height) - parseInt($.pagingControl.height)) + "dp";
}
_.extend($.getView(), args);

// Use the view from this widget in the calling container
__parentSymbol.add($.getView());
