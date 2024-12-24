function topicCard(path, title, content, language, status) {
    const href = (status === 'not-ready') ? '#' : `${path}/index.html`;
    return `
        <a href="${path}/index.html">
        <div class="card ${language} ${status}" style="display: inline-block; width: 15rem; margin: 3px;">
            <a href="${href}"><img src="${path}/logo.jpg" class="card-img-top" alt="...">
                <div class="card-body" style="min-height: 5rem;">
                    <h5 class="card-title">${content}</h5>
                    <!-- <p class="card-text">${content}</p> -->
                    <!-- ><a href="${path}/index.html" class="btn btn-primary">Try it!</a> -->
                </div>
            </a>
        </div>
        </a>
    `;
}

customElements.define(
    'cc-topic-card',
    class extends HTMLElement {
        static observedAttributes = ['path', 'title', 'language', 'status'];

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue === newValue) return;
            // Timeout required because innerHTML is not set yet.
            setTimeout(() => {
                this.content = this.content || this.innerHTML
                this[name] = newValue;
                if (this.path && this.title)
                    this.innerHTML = topicCard(this.path, this.title, this.content, this.language, this.status);
            });
        }
    });