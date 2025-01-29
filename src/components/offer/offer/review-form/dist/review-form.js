"use strict";
exports.__esModule = true;
require("./review-form.css");
var hooks_1 = require("@/hooks");
var const_1 = require("@/libs/const");
var fullOffer_1 = require("@/storage/slices/fullOffer");
var fullOffer_2 = require("@/thunk/fullOffer");
var react_1 = require("react");
var review_rate_1 = require("../../reviews/review-rate/review-rate");
function ReviewForm() {
    var dispatch = hooks_1.useAppDispatch();
    var currentOffer = hooks_1.useAppSelector(fullOffer_1.offerFullSElectors.selectFullOffer);
    var isDisable = hooks_1.useAppSelector(fullOffer_1.offerFullSElectors.selectIsFormDisabled);
    var postStatus = hooks_1.useAppSelector(fullOffer_1.offerFullSElectors.selectPostReviewRequestStatus);
    var _a = react_1.useState({
        comment: '',
        rating: 0
    }), review = _a[0], setReview = _a[1];
    var formRef = react_1.useRef(null);
    var handleTextChange = function (evt) {
        setReview({
            comment: evt.target.value,
            rating: review.rating
        });
    };
    var handleSubmitForm = function (e) {
        e.preventDefault();
        if (currentOffer) {
            var id = currentOffer.id;
            dispatch(fullOffer_2.sendReview({ id: id, review: review }));
            setReview({
                comment: '',
                rating: 0
            });
        }
        if (formRef.current) {
            formRef.current.reset();
        }
    };
    if (review.comment.length >= Number(const_1.ReviewLength.Min) && review.rating !== 0) {
        dispatch(fullOffer_1.offerFullActions.setFormDisabled(false));
    }
    else {
        dispatch(fullOffer_1.offerFullActions.setFormDisabled(true));
    }
    return (React.createElement("form", { ref: formRef, onSubmit: handleSubmitForm, className: 'reviews__form form', action: '#', method: 'post' },
        React.createElement("label", { className: 'reviews__label form__label', htmlFor: 'review' }, "Your review"),
        React.createElement("div", { className: 'reviews__rating-form form__rating' }, Object.entries(const_1.RateValues)
            .sort(function (_a, _b) {
            var ratingA = _a[0];
            var ratingB = _b[0];
            return Number(ratingB) - Number(ratingA);
        })
            .map(function (_a) {
            var rating = _a[0], title = _a[1];
            return (React.createElement(review_rate_1.ReviewRate, { review: review, key: title, setReview: setReview, defaultValue: Number(rating), valueDescription: title }));
        })),
        React.createElement("textarea", { className: 'reviews__textarea form__textarea', name: 'review', minLength: const_1.ReviewLength.Min, maxLength: const_1.ReviewLength.Max, value: review.comment, id: 'review', placeholder: 'Tell how was your stay, what you like and what can be improved', required: true, onChange: handleTextChange }),
        postStatus === const_1.RequestStatus.Failed && (React.createElement("p", { className: 'reviews__error' }, "Sorry, an error occured. Try one more time.")),
        React.createElement("div", { className: 'reviews__button-wrapper' },
            React.createElement("p", { className: 'reviews__help' },
                "To submit review please make sure to set",
                ' ',
                React.createElement("span", { className: 'reviews__star' }, "rating"),
                " and describe your stay with at least",
                ' ',
                React.createElement("b", { className: 'reviews__text-amount' },
                    const_1.ReviewLength.Min,
                    " characters"),
                "."),
            React.createElement("button", { className: 'reviews__submit form__submit button', type: 'submit', disabled: isDisable }, "Submit"))));
}
exports["default"] = ReviewForm;
