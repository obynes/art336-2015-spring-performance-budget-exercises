(function($) {
    diysdk.webcomponent('diysdk.contentApps.businessHours', {

        init : function(data, baseSaveUrl) {
            this._super(data, baseSaveUrl);

            // your webcomponent constructor code here...
        }

    });

    diysdk.contentApps.businessHours.addView('web', {

        eventBindings : [
            // add your event bindings here:
        ],

        // add your event handler functions here:

        init : function(name, webComponent, mainJQ, data, parentView) {
            this._super(name, webComponent, mainJQ, data, parentView);

            var mainJQ = this.getMainJQ();
            jQuery(mainJQ.find('.alignment')).ready(function()
            {
	            var maxWidth  = -1;
	            var timeWidth = -1;
	            var conWidth  = mainJQ.find('.alignment').width();
	
	            mainJQ.find('.businessHoursTable .businessHours').each(function(index){
	            	if ($(this).find('.days').width() > maxWidth)
	            	{
	            		maxWidth = $(this).find('.days').width();
	            	}
	            	if ($(this).find('.time').width() > timeWidth)
	            	{
	            		timeWidth = $(this).find('.time').width();
	            	}
	            });
	            padding  = 10;
	            maxWidth = maxWidth + 1;
	            var summaryWidth = maxWidth + ( timeWidth +1 ) + padding;
	            mainJQ.find('.days').width(maxWidth);
	            if(summaryWidth > conWidth)
	            {	
	            	mainJQ.find('.alignment').removeClass('large').addClass('small');
	            }
            });
        }
    });
}(jQuery));