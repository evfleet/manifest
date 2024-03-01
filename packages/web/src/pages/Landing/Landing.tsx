import { Layout } from "@/components/Layout";

export function Landing() {
  return (
    <Layout>
      <main>
        <section className="bg-blue-600">
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white">
                Unlock Your Productivity Potential with Manifest
              </h1>
              <p className="mt-2 text-white">
                Manifest is designed to revolutionize the way you manage tasks
                and projects. Visualize your workflow, prioritize tasks
                effortlessly, and collaborate seamlessly with your team.
              </p>
            </div>

            <div className="flex-1">
              <p>Graphics</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-2xl">Your Ultimate Productivity Companion</h2>

            <p>
              Say hello to stress-free task management with our ultimate Kanban
              board companion. Our intuitive app is designed to simplify your
              workflow, streamline communication, and keep projects on track.
              With customizable workflows, staying organized has never been
              easier. Simplify your life and achieve more with Manifest.
            </p>
          </div>

          <div>
            <div>
              <h3>Boards</h3>
              <p>
                Bring task management together in one place. Customize your own
                layouts to make productivity work for you.
              </p>
            </div>

            <div>
              <h3>Lists</h3>
              <p>
                List out tasks in a way that makes sense for you. Adapt to you
                and your team's workflow.
              </p>
            </div>

            <div>
              <h3>Cards</h3>
              <p>
                Represent tasks and ideas however you like. Contain everything
                about a task in one convenient place.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
