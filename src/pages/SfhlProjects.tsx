import { motion } from "framer-motion";

const SfhlProjects = (props: any) => {
  const { workProjects } = props;
  return (
    <div className="flex flex-col gap-4">
      {workProjects?.map((item: any) => {
        return (
          <motion.div
            className="flex flex-col items-start gap-4 justify-between  sm:ps-2"
            key={item?.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3 className="font-semibold text-lg text-pretty">{item?.title}</h3>
            <p className="text-lg sm:text-xl">{item?.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};
export default SfhlProjects;
