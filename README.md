# Docker Base Image Experiment: glibc vs musl

Played around with Docker base images—**Debian slim (glibc) vs Alpine (musl)**—to see how size, compatibility, and just “does it work?” factor differ. Spoiler: there are trade-offs.  

---

## What went down

- Built a Docker image with **Debian slim**  
- Built a Docker image with **Alpine**  
- Ran some simple apps/tests to check compatibility and image size  
- Hit a few bumps (Alpine can be picky 😅)

---

## Stuff I learned

1. **Size vs Compatibility**  
   - Alpine is tiny (~5 MB) and super fast  
   - Slim is bigger but, honestly, just works  

2. **Library drama**  
   - Alpine doesn’t have glibc by default → some apps crash  
   - Slim includes glibc → fewer headaches  

3. **Trade-offs**  
   - Slim: bigger, safer, easier to debug  
   - Alpine: small, fast, but you might need to tweak stuff

---

## Quick Setup (so you can try too)

```bash
# Build slim image
docker build -t Dockerfile_slim .

# Build Alpine image
docker build -t Dockerfile_alpine .

# Run them
docker run --rm Dockerfile_slim
docker run --rm Dockerfile_alpine
