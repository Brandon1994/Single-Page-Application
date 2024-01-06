import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1> Welcome back, Dom</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat sapien sit amet urna efficitur, sit amet consequat nisl euismod. Mauris sollicitudin sollicitudin massa sed tristique. Curabitur luctus interdum quam, ac commodo leo ultrices vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porta eu urna ut imperdiet. Pellentesque luctus, sem in suscipit cursus, magna diam aliquet neque, sit amet vestibulum orci nisl ut nisi. Sed nec quam urna. Morbi ac sem mauris. Duis sed ante sit amet diam efficitur convallis sed at ligula. Etiam nec tellus in tortor tempor aliquet. Suspendisse potenti.
        </p>
        <p>
            <a href="/posts" data-link> View recent posts </a>.
        </p>
        `
    };
}