const UrlParser = {
  ActiveUrlCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return ((splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
    + (splitedUrl.type ? `/${splitedUrl.type}` : '')
    + (splitedUrl.id ? '/:id' : '')
    + (splitedUrl.verb ? `/${splitedUrl.verb}` : ''));
  },

  ActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[3] || null,
      type: urlsSplits[2] || null,
      verb: urlsSplits[4] || null,
    };
  },
};

export default UrlParser;
