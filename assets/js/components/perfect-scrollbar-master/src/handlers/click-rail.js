import updateGeometry from"../update-geometry";export default function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",e=>e.stopPropagation()),t.event.bind(t.scrollbarYRail,"mousedown",e=>{var o=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=o*t.containerHeight,updateGeometry(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",e=>e.stopPropagation()),t.event.bind(t.scrollbarXRail,"mousedown",e=>{var o=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=o*t.containerWidth,updateGeometry(t),e.stopPropagation()})}