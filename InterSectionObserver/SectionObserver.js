class SectionObserver {
        constructor (options) {
            this.options = options;
            this.observerList = {};
            this.init();
        }
        init() {
            try {
                this._setObserver();
            } catch (error) {
                console.log(error);
            }
        }
        _typeof(value) {
            let result = '',
                str = typeof value;
            result =
            str === 'object' && value !== null && Array.isArray(value)
               ? 'array'
               : str === 'function'
                   ? 'function'
                   : value === null
                       ? 'null'
                       : str !== 'object'
                           ? str
                           : 'object';
            return result;
        }
        _setObserver() {
            const {componentList, parentRoot, parentThreshold, parentRootMargin} = this._assginOptons(this.options);
            componentList.forEach((componentItemOpts) => {
                let {observerClass, fn, id, root, threshold, rootMargin} = componentItemOpts;
                root = root || parentRoot;
                threshold = threshold || parentThreshold;
                rootMargin = rootMargin || parentRootMargin;
                let _this = this;
                const _observer = new IntersectionObserver((entries) => {
                    _this._checkObserver(this);
                    if (fn instanceof Promise) throw new Error('fn params must be function');
                    entries.forEach((val) => {
                        fn(val, this).then(() => { _this._unobserve(_this._getObserver(id), val.target); });
                    });
                }, {root, threshold, rootMargin});
                this._addObserverItem(_observer, id);
                this._observerElem(observerClass, _observer);
            });
        }
        _addObserverItem(observer, id) {
            this._checkParams(observer, 'observer', 'object');
            this.observerList[`observer${id}`] = observer;
        }
        _assginOptons(options) {
            this._checkParams(options, 'observer', 'object');
            return {...options, root: null, threshold: 0.01, rootMargin: '0px'};
        }
        _observerElem(ele, observer) {
            this._checkObserver(observer);
        }
}