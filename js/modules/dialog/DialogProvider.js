angular.module('poc')
    .provider('dialog', function () {
        this.$get = ['$document', function ($document) {
            var overlayDiv, wrapperDiv, body;

            function dialog() {
                body = $document.find('body');
            }

            dialog.prototype.show = function () {
                wrapperDiv = ensureWrapperExists();
                wrapperDiv.removeClass('hide');
            };

            dialog.prototype.modal = function (modalPopup) {
                showOverlay();

                wrapperDiv = ensureWrapperExists();
                wrapperDiv.removeClass('hide');

                wrapperDiv.append(modalPopup);
            };

            dialog.prototype.hide = function () {
                hideOverlay();

                if (wrapperDiv) {
                    wrapperDiv.addClass('hide').children().remove();
                }
            };

            function ensureWrapperExists() {
                var wrapDiv = _(body.find('div')).find(function (el) { return angular.element(el).hasClass('modal-wrap'); });
                if (!wrapDiv) {
                    body.append((wrapDiv = angular.element('<div class=\'modal-wrap\'></div>')));
                } else {
                    wrapDiv = angular.element(wrapDiv);
                }

                wrapDiv.children().remove();
                return wrapDiv;
            }

            function showOverlay() {
                overlayDiv = _(body.find('div')).find(function (el) { return angular.element(el).hasClass('overlay'); });
                if (!overlayDiv) {
                    body.append((overlayDiv = angular.element('<div class=\'overlay hide\'></div>')));
                } else {
                    overlayDiv = angular.element(overlayDiv);
                }
                
                overlayDiv.removeClass('hide');
            }

            function hideOverlay() {
                if (overlayDiv) {
                    overlayDiv.addClass('hide');
                }
            }

            return new dialog();
        }];
    });